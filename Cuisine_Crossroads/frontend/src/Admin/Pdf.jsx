import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';

function Pdf() {
    const [content, setContent] = useState('');
    const [placeholders, setPlaceholders] = useState([]);
    const [inputValues, setInputValues] = useState({});
    const [generatedContent, setGeneratedContent] = useState('');
    const [showPreview, setShowPreview] = useState(false);

    // Handle TinyMCE content changes
    const handleEditorChange = (newContent) => {
        setContent(newContent);
        const placeholderIndexes = extractPlaceholders(newContent);
        setPlaceholders(placeholderIndexes);
        setInputValues(
            placeholderIndexes.reduce((acc, _, index) => {
                acc[index] = '';
                return acc;
            }, {})
        );
    };

    // Extract placeholders from content and return their positions
    function extractPlaceholders(text) {
        const matches = [...text.matchAll(/{#var#}/g)];
        return matches.map((match) => match.index).filter(index => index !== undefined);
    }

    // Handle input changes
    function handleInputChange(index, value) {
        setInputValues(prev => ({ ...prev, [index]: value }));
    }

    // Generate content with filled input values
    const generateContent = () => {
        let filledContent = content;
        extractPlaceholders(content).forEach((start, index) => {
            const value = inputValues[index] || '';
            filledContent = filledContent.replace(/{#var#}/, value);
        });

        setGeneratedContent(filledContent);
    };

    // Handle preview button click
    const previewContent = () => {
        generateContent(); // Ensure the content is updated
        setShowPreview(true);
    };

    // Generate PDF
    function generatePDF() {
        const previewContent = document.getElementById('modal-preview-content');

        html2canvas(previewContent).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();

            const imgProps = pdf.getImageProperties(imgData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save('document.pdf');
        });
    }

    function renderContentWithInputs(text) {
        const placeholderIndexes = extractPlaceholders(text);

        let lastIndex = 0;
        const segments = [];
        placeholderIndexes.forEach((start, index) => {
            const end = start + '{#var#}'.length;
            if (start > lastIndex) {
                segments.push(
                    <React.Fragment key={`text-${index}`}>
                        <span dangerouslySetInnerHTML={{ __html: text.substring(lastIndex, start) }} />
                        <input
                            type="text"
                            value={inputValues[index] || ''}
                            onChange={e => handleInputChange(index, e.target.value)}
                            className="form-control-inline"
                            style={{ width: 'auto', display: 'inline', margin: '0 5px' }}
                        />
                    </React.Fragment>
                );
            }
            lastIndex = end;
        });

        if (lastIndex < text.length) {
            segments.push(<span key="remaining" dangerouslySetInnerHTML={{ __html: text.substring(lastIndex) }} />);
        }

        return segments;
    }

    return (
        <div className="container">
            <h2>TinyMCE Editor</h2>
            <Editor
                apiKey="w7mi1y32cdavagvsmpohqdi520f8k97ueerob9lg7wa2ua8o" // Replace with your TinyMCE API key
                value={content}
                init={{
                    height: 500,
                    menubar: false,
                    plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
                    toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                    // plugins: [
                    //     'advlist autolink lists link image charmap print preview anchor',
                    //     'searchreplace visualblocks code fullscreen',
                    //     'insertdatetime media table paste code help wordcount'
                    // ],
                    // toolbar:
                    //     'undo redo | formatselect | bold italic backcolor | \
                    //     alignleft aligncenter alignright alignjustify | \
                    //     bullist numlist outdent indent | removeformat | help | \
                    //     image media | link',
                    image_title: true,
                    automatic_uploads: true,
                    file_picker_types: 'image',
                    file_picker_callback: function (cb, value, meta) {
                        var input = document.createElement('input');
                        input.setAttribute('type', 'file');
                        input.setAttribute('accept', 'image/*');

                        input.onchange = function () {
                            var file = this.files[0];
                            var reader = new FileReader();

                            reader.onload = function () {
                                var id = 'blobid' + (new Date()).getTime();
                                var blobCache = window.tinymce.activeEditor.editorUpload.blobCache;
                                var base64 = reader.result.split(',')[1];
                                var blobInfo = blobCache.create(id, file, base64);
                                blobCache.add(blobInfo);

                                cb(blobInfo.blobUri(), { title: file.name });
                            };
                            reader.readAsDataURL(file);
                        };

                        input.click();
                    }
                }}
                onEditorChange={handleEditorChange}
            />
            <button onClick={generateContent} className="btn btn-primary mt-3">Generate</button>

            {/* Display Generated Content with Input Boxes */}
            <div className="mt-3">
                <h4>Generated Content:</h4>
                <div>
                    {renderContentWithInputs(content)}
                </div>
                <button onClick={previewContent} className="btn btn-secondary mt-3">Preview</button>
            </div>

            {/* Preview Modal */}
            <Modal show={showPreview} onHide={() => setShowPreview(false)} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Preview and Download PDF</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div id="modal-preview-content" dangerouslySetInnerHTML={{ __html: generatedContent }} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowPreview(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={generatePDF}>
                        Download PDF
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Pdf;
