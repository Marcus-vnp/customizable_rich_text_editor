let text_area = window.document.getElementById('areaTexto');

let h_header = window.document.getElementById('header');
let header_on = undefined;

let b_bolder = window.document.getElementById('bolder');
let bolder_on = undefined;

let i_italic = window.document.getElementById('italic');
let italic_on = undefined;

let u_underline = window.document.getElementById('underliner');
let underliner_on = undefined;

let c_code = window.document.getElementById('code');
let code_on = undefined;

let l_list = window.document.getElementById('lister');
let list_on = undefined;

let q_quote = window.document.getElementById('quoter');
let quote_on = undefined;

let l_link = window.document.getElementById('linker');
let link_on = undefined;

h_header.addEventListener('click', turnHeader);
b_bolder.addEventListener('click', turnBolder);
i_italic.addEventListener('click', turnItalic);
u_underline.addEventListener('click', turnUnderliner);
c_code.addEventListener('click', turnCodeMode);
l_list.addEventListener('click', turnList);
q_quote.addEventListener('click', turnQuote);
l_link.addEventListener('click', turnLink);

function turnHeader(){
    if (typeof(header_on) === 'undefined' || header_on === false){
        let target_text = window.getSelection();
        let text = target_text.toString();
        let text_range = target_text.getRangeAt(0);

        if (text !== ''){
            let header_create = window.document.createElement('div');
            header_create.innerHTML = text;
            header_create.style.fontSize = '2em';
            header_create.style.fontWeight = 'bold';

            text_range.deleteContents();
            text_range.insertNode(header_create);

            header_on = true;
        }
    }
    else if (header_on === true){
        let target_text = window.getSelection();
        let text = target_text.toString();
        let text_range = target_text.getRangeAt(0);

        if (text !== ''){
            let p_create = window.document.createElement('div');
            p_create.innerHTML = text;
            p_create.style.fontSize = '16px';
            p_create.style.fontWeight = 'normal';
    
            text_range.deleteContents();
            text_range.insertNode(p_create);
    
            header_on = false;
        }
    }
}

function turnBolder(){
    if (typeof(bolder_on) === 'undefined' || bolder_on === true){
        let target_text = window.getSelection();
        let text = target_text.toString();
        let text_range = target_text.getRangeAt(0);

        if (text !== ''){
            let bold_create = window.document.createElement('div');
            bold_create.innerText = text;
            bold_create.style.fontWeight = 'bold';

            text_range.deleteContents();
            text_range.insertNode(bold_create);

            bolder_on = false;
        }
    }
    else if (bolder_on === false){
        let target_text = window.getSelection();
        let text = target_text.toString();
        let text_range = target_text.getRangeAt(0);

        if (text !== ''){
            let p_create = window.document.createElement('div');
            p_create.innerText = text;
            p_create.style.fontWeight = 'normal';

            text_range.deleteContents();
            text_range.insertNode(p_create);

            bolder_on = true;
        }
    }
}

function turnItalic(){
    if (typeof(italic_on) === 'undefined' || italic_on === true){
        let target_text = window.getSelection();
        let text = target_text.toString();
        let text_range = target_text.getRangeAt(0);

        if (text !== ''){
            let italic_create = window.document.createElement('div');
            italic_create.innerText = text;
            italic_create.style.fontStyle = 'italic';

            text_range.deleteContents();
            text_range.insertNode(italic_create);

            italic_on = false;
        }
    }
    else if (italic_on === false){
        let target_text = window.getSelection();
        let text = target_text.toString();
        let text_range = target_text.getRangeAt(0);

        if (text !== ''){
            let p_create = window.document.createElement('div');
            p_create.innerHTML = text;
            p_create.style.fontStyle = 'normal';

            text_range.deleteContents();
            text_range.insertNode(p_create);

            italic_on = true;
        }
    }
}

function turnUnderliner(){
    if (typeof(underliner_on) === 'undefined' || underliner_on === true){
        let target_text = window.getSelection();
        let text = target_text.toString();
        let text_range = target_text.getRangeAt(0);

        if (text !== ''){
            var underline_create = window.document.createElement('div');
            underline_create.innerText = text;
            underline_create.style.textDecorationLine = 'underline';

            text_range.deleteContents();
            text_range.insertNode(underline_create);

            underliner_on = false;
        }
    }
    else if (underliner_on === false){
        let target_text = window.getSelection();
        let text = target_text.toString();
        let text_range = target_text.getRangeAt(0);

        if (text !== ''){
            let p_create = window.document.createElement('div');
            p_create.innerHTML = text;
            p_create.style.textDecorationLine = 'none';

            text_range.deleteContents();
            text_range.insertNode(p_create);

            p_create.parentElement.style.textDecorationLine = 'none';

            underliner_on = true;
        }
    }
}

function turnCodeMode(){
    if (typeof(code_on) === 'undefined' || code_on === true){
        let target_text = window.getSelection();
        let text = target_text.toString();
        let text_range = target_text.getRangeAt(0);
        
        if (text !== ''){
            let code_create = window.document.createElement('div');
            code_create.innerText = text;
            code_create.style.fontFamily = 'monospace';
            code_create.style.fontSize = '13px';

            text_range.deleteContents();
            text_range.insertNode(code_create);

            code_on = false;
        }
    }
    else if (code_on === false){
        let target_text = window.getSelection();
        let text = target_text.toString();
        let text_range = target_text.getRangeAt(0);

        if (text !== ''){
            let p_create = window.document.createElement('div');
            p_create.innerHTML = text;
            p_create.style.fontFamily = 'Poppins, sans-serif';
            p_create.style.fontSize = '16px';

            text_range.deleteContents();
            text_range.insertNode(p_create);

            underliner_on = true;
        }
    }
}

function turnList(){
    if (typeof(list_on) === 'undefined' || list_on === true){
        let target_text = window.getSelection();
        let text = target_text.toString();
        let text_range = target_text.getRangeAt(0);

        if (target_text !== ''){
            let list_create = window.document.createElement('ul');
            text_area.appendChild(list_create);

            let list_ele_create = window.document.createElement('li');
            list_ele_create.innerText = text;
            list_ele_create.style.textIndent = '30px';
    
            text_range.deleteContents();
            list_create.appendChild(list_ele_create);

            list_on = false;
        }
    }
    else if (list_on === false){
        let target_text = window.getSelection();
        let text = target_text.toString();
        let text_range = target_text.getRangeAt(0);

        if (target_text !== ''){
            let p_create = window.document.createElement('div');
            p_create.innerHTML = text;

            text_range.deleteContents();
            text_area.appendChild(p_create);

            list_on = true;
        }
    }
}

function turnQuote(){
    if(typeof(quote_on) === 'undefined' || quote_on === true){
        let target_text = window.getSelection();
        let text = target_text.toString();
        let text_range = target_text.getRangeAt(0);
        alert('teste')
        if(text !== ''){
            let quote_create = window.document.createElement('div');
            text = '"' + text + '"';
            quote_create.innerText = text;
            quote_create.style.backgroundColor = 'lightgray';
            quote_create.style.fontSize = 'large';
            quote_create.style.textIndent = '15px';

            text_range.deleteContents();
            text_range.insertNode(quote_create);

            quote_on = false;
        }
    }
    else if (quote_on === false){
        let target_text = window.getSelection();
        let text = target_text.toString();
        let text_range = target_text.getRangeAt(0);

        if (text !== ''){
            let p_create = window.document.createElement('div');
            text = text.substring(1);
            text = text.substring(0, text.length - 1);
            p_create.innerText = text;

            text_range.deleteContents();
            text_area.insertNode(p_create);

            quote_on = true;
        }
    }
}

function turnLink(){
    if(typeof(link_on) === 'undefined' || link_on === true){
        let target_text = window.getSelection();
        let text = target_text.toString();
        let text_range = target_text.getRangeAt(0);

        if(text !== ''){
            let link_create = window.document.createElement('a');
            link_create.innerText = text;
            let url_link = window.prompt('Write the URL to link:').toString();
            link_create.href = url_link;
            link_create.style.color = 'blue';
            link_create.style.textDecoration = 'underline';

            text_range.deleteContents();
            text_area.appendChild(link_create)

            link_on = false;
        }
    }
    else if (link_on === false){
        let target_text = window.getSelection();
        let text = target_text.toString();
        let text_range = target_text.getRangeAt(0);

        if (text !== ''){
            let p_create = window.document.createElement('div');
            p_create.innerText = text;
            p_create.style.textDecoration = 'none';
            p_create.style.color = 'black';

            text_range.deleteContents();
            text_range.insertNode(p_create);

            link_on = true;
        }
    }
}