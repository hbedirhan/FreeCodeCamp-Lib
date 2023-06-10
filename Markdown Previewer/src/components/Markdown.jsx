import React, { useState } from 'react';
import MarkdownPreview from '@uiw/react-markdown-preview';
import { useSelector, useDispatch } from 'react-redux';
import { changeText, } from '../redux/markdownSlice';


const help = `Heading
=======

Sub-heading
-----------

### Another deeper heading

Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a
line break

Text attributes *italic*, **bold**,
\`monospace\`, ~~strikethrough~~ .

Shopping list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears

The rain---not the reign---in
Spain.
`;

function Markdown() {

    const text = useSelector((state) => state.markdown.text);
    const dispatch = useDispatch();

    const [markdown, setMarkdown] = useState('');
    const [isHelpShown, setIsHelpShown] = useState(false);

    const handleMarkdownChange = (e) => {
        setMarkdown(e.target.value);
        dispatch(changeText(markdown));
    };

    const showHelp = () => {
        if (markdown === help) {
            setMarkdown(text);
            setIsHelpShown(false);
        } else {
            setMarkdown(help);
            setIsHelpShown(true);
        }
    };

    return (
        <div className="main-content">
            <header>
                <h1 className="app-title">Markdown Previewer</h1>
                <div className={`help-button ${isHelpShown && 'active'}`} onClick={showHelp}>
                    <i className="fa fa-question" aria-hidden="true"></i>
                </div>
            </header>
            <div className="text-panels">
                <textarea
                    className="text-panel-left"
                    value={markdown}
                    onChange={handleMarkdownChange}
                    placeholder="Enter your Markdown..."
                    disabled={isHelpShown}
                />
                <MarkdownPreview className="text-panel-right" source={markdown} />
            </div>
        </div>
    )
}

export default Markdown