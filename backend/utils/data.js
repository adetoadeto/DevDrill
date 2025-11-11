import Course from "../model/course.model.js";
import Question from "../model/questions.model.js";

const data = {
    html: {
        beginners: [
            {
                "question": "What does HTML stand for?",
                "options": ["Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyper Text Markup Language", "Hyperlinking Text Markup Language"],
                "answer": "Hyper Text Markup Language"
            },
            {
                "question": "Which tag is used to create a paragraph?",
                "options": ["<para>", "<p>", "<paragraph>", "<text>"],
                "answer": "<p>"
            },
            {
                "question": "Which tag creates the largest heading?",
                "options": ["<h6>", "<head>", "<h1>", "<heading>"],
                "answer": "<h1>"
            },
            {
                "question": "How do you create a hyperlink in HTML?",
                "options": ["<link href='url'>Text</link>", "<a href='url'>Text</a>", "<href>'url'</href>", "<url>Text</url>"],
                "answer": "<a href='url'>Text</a>"
            },
            {
                "question": "Which attribute specifies the URL of a link?",
                "options": ["src", "link", "href", "url"],
                "answer": "href"
            },
            {
                "question": "Which tag is used to display an image?",
                "options": ["<image>", "<img>", "<pic>", "<src>"],
                "answer": "<img>"
            },
            {
                "question": "Which HTML tag is used to create an ordered list?",
                "options": ["<ol>", "<ul>", "<li>", "<order>"],
                "answer": "<ol>"
            },
            {
                "question": "Which HTML tag is used to create an unordered list?",
                "options": ["<ol>", "<ul>", "<li>", "<order>"],
                "answer": "<ul>"
            },
            {
                "question": "Which tag defines a table row?",
                "options": ["<tr>", "<td>", "<table>", "<th>"],
                "answer": "<tr>"
            },
            {
                "question": "Which tag defines a table data cell?",
                "options": ["<td>", "<tr>", "<th>", "<table>"],
                "answer": "<td>"
            },
            {
                "question": "Which tag defines a table header cell?",
                "options": ["<th>", "<td>", "<tr>", "<thead>"],
                "answer": "<th>"
            },
            {
                "question": "Which tag defines a form?",
                "options": ["<form>", "<input>", "<field>", "<submit>"],
                "answer": "<form>"
            },
            {
                "question": "Which attribute is used to specify the input type?",
                "options": ["value", "type", "name", "placeholder"],
                "answer": "type"
            },
            {
                "question": "Which tag inserts a line break?",
                "options": ["<lb>", "<br>", "<line>", "<break>"],
                "answer": "<br>"
            },
            {
                "question": "Which HTML tag displays bold text?",
                "options": ["<strong>", "<b>", "<bold>", "<em>"],
                "answer": "<b>"
            },
            {
                "question": "Which HTML tag displays italic text?",
                "options": ["<italic>", "<em>", "<i>", "<it>"],
                "answer": "<i>"
            },
            {
                "question": "Which tag creates a checkbox?",
                "options": ["<checkbox>", "<input type='checkbox'>", "<input checkbox>", "<box>"],
                "answer": "<input type='checkbox'>"
            },
            {
                "question": "Which tag creates a radio button?",
                "options": ["<radio>", "<input type='radio'>", "<button>", "<input radio>"],
                "answer": "<input type='radio'>"
            },
            {
                "question": "Which HTML element defines the document title?",
                "options": ["<meta>", "<head>", "<title>", "<header>"],
                "answer": "<title>"
            },
            {
                "question": "Which HTML tag defines the body of a document?",
                "options": ["<main>", "<body>", "<section>", "<html>"],
                "answer": "<body>"
            },
            {
                "question": "Which tag defines the main heading section of an HTML document?",
                "options": ["<header>", "<head>", "<h1>", "<title>"],
                "answer": "<header>"
            },
            {
                "question": "Which HTML element is used to specify a footer for a document?",
                "options": ["<bottom>", "<footer>", "<end>", "<base>"],
                "answer": "<footer>"
            },
            {
                "question": "Which tag defines metadata about an HTML document?",
                "options": ["<meta>", "<data>", "<info>", "<details>"],
                "answer": "<meta>"
            },
            {
                "question": "Which attribute specifies an image source?",
                "options": ["src", "href", "link", "alt"],
                "answer": "src"
            },
            {
                "question": "Which attribute provides alternative text for an image?",
                "options": ["title", "alt", "name", "desc"],
                "answer": "alt"
            },
            {
                "question": "Which HTML element is used to create a dropdown list?",
                "options": ["<dropdown>", "<select>", "<input type='list'>", "<menu>"],
                "answer": "<select>"
            },
            {
                "question": "Which element is used to define an option in a dropdown list?",
                "options": ["<item>", "<option>", "<selectitem>", "<choice>"],
                "answer": "<option>"
            },
            {
                "question": "Which element is used to define an inline frame?",
                "options": ["<iframe>", "<frame>", "<window>", "<inline>"],
                "answer": "<iframe>"
            },
            {
                "question": "Which tag defines a comment in HTML?",
                "options": ["// comment", "/* comment */", "<!-- comment -->", "<comment>"],
                "answer": "<!-- comment -->"
            },
            {
                "question": "Which tag defines emphasized text?",
                "options": ["<i>", "<em>", "<b>", "<strong>"],
                "answer": "<em>"
            },
            {
                "question": "Which HTML tag is used to define important text?",
                "options": ["<strong>", "<b>", "<important>", "<bold>"],
                "answer": "<strong>"
            },
            {
                "question": "Which HTML tag defines a list item?",
                "options": ["<li>", "<item>", "<list>", "<ul>"],
                "answer": "<li>"
            },
            {
                "question": "Which HTML tag defines a section in a document?",
                "options": ["<div>", "<section>", "<article>", "<main>"],
                "answer": "<section>"
            },
            {
                "question": "Which tag is used to group inline elements?",
                "options": ["<group>", "<div>", "<span>", "<section>"],
                "answer": "<span>"
            },
            {
                "question": "Which HTML element is used to play video files?",
                "options": ["<movie>", "<video>", "<media>", "<play>"],
                "answer": "<video>"
            },
            {
                "question": "Which HTML element is used to play audio files?",
                "options": ["<sound>", "<music>", "<audio>", "<play>"],
                "answer": "<audio>"
            },
            {
                "question": "Which attribute is used to make a form input required?",
                "options": ["required", "validate", "mustfill", "needed"],
                "answer": "required"
            },
            {
                "question": "Which HTML element defines navigation links?",
                "options": ["<navigate>", "<nav>", "<menu>", "<links>"],
                "answer": "<nav>"
            },
            {
                "question": "Which HTML tag defines a table?",
                "options": ["<table>", "<tab>", "<data>", "<chart>"],
                "answer": "<table>"
            },
            {
                "question": "Which tag defines a client-side image map?",
                "options": ["<map>", "<area>", "<image>", "<usemap>"],
                "answer": "<map>"
            },
            {
                "question": "Which HTML tag defines a clickable area inside an image map?",
                "options": ["<map>", "<area>", "<section>", "<click>"],
                "answer": "<area>"
            },
            {
                "question": "Which HTML element is used to define a caption for a table?",
                "options": ["<caption>", "<title>", "<label>", "<head>"],
                "answer": "<caption>"
            },
            {
                "question": "Which HTML element is used to group table rows?",
                "options": ["<tbody>", "<thead>", "<tfoot>", "<group>"],
                "answer": "<tbody>"
            },
            {
                "question": "Which HTML tag is used to make text underline?",
                "options": ["<underline>", "<u>", "<line>", "<ins>"],
                "answer": "<u>"
            },
            {
                "question": "Which tag is used to strike through text?",
                "options": ["<strike>", "<del>", "<s>", "<remove>"],
                "answer": "<s>"
            },
            {
                "question": "Which tag is used for superscript text?",
                "options": ["<sup>", "<sub>", "<up>", "<top>"],
                "answer": "<sup>"
            },
            {
                "question": "Which tag is used for subscript text?",
                "options": ["<sub>", "<sup>", "<bottom>", "<low>"],
                "answer": "<sub>"
            },
            {
                "question": "Which HTML element is used for inserting a horizontal line?",
                "options": ["<line>", "<hr>", "<break>", "<br>"],
                "answer": "<hr>"
            },
            {
                "question": "Which HTML element defines the root of a document?",
                "options": ["<body>", "<html>", "<head>", "<root>"],
                "answer": "<html>"
            },
            {
                "question": "Which HTML tag defines a container for an external application?",
                "options": ["<embed>", "<object>", "<iframe>", "<app>"],
                "answer": "<object>"
            },
            {
                "question": "Which tag defines a button?",
                "options": ["<btn>", "<button>", "<submit>", "<input>"],
                "answer": "<button>"
            },

            {
                "question": "Which HTML tag defines a label for an input element?",
                "options": ["<caption>", "<label>", "<input>", "<tag>"],
                "answer": "<label>"
            },
            {
                "question": "Which tag is used to specify a list of pre-defined options for an input?",
                "options": ["<option>", "<datalist>", "<select>", "<list>"],
                "answer": "<datalist>"
            },
            {
                "question": "Which HTML tag defines a block of code?",
                "options": ["<pre>", "<code>", "<script>", "<source>"],
                "answer": "<code>"
            },
            {
                "question": "Which HTML tag preserves both spaces and line breaks?",
                "options": ["<keep>", "<pre>", "<code>", "<text>"],
                "answer": "<pre>"
            },
            {
                "question": "Which tag defines a quotation?",
                "options": ["<quote>", "<q>", "<blockquote>", "<citation>"],
                "answer": "<q>"
            },
            {
                "question": "Which HTML element defines a long quotation?",
                "options": ["<quote>", "<longquote>", "<blockquote>", "<cite>"],
                "answer": "<blockquote>"
            },
            {
                "question": "Which tag defines the title of a table?",
                "options": ["<caption>", "<title>", "<head>", "<tabletitle>"],
                "answer": "<caption>"
            },
            {
                "question": "Which HTML element is used to define contact information?",
                "options": ["<contact>", "<address>", "<info>", "<author>"],
                "answer": "<address>"
            },
            {
                "question": "Which HTML element defines a definition term?",
                "options": ["<dt>", "<dd>", "<dfn>", "<term>"],
                "answer": "<dt>"
            },
            {
                "question": "Which HTML element defines a description in a description list?",
                "options": ["<desc>", "<dd>", "<dl>", "<dt>"],
                "answer": "<dd>"
            },
            {
                "question": "Which HTML element defines a list of definitions?",
                "options": ["<dl>", "<list>", "<ul>", "<ol>"],
                "answer": "<dl>"
            },
            {
                "question": "Which HTML tag defines a container for navigation links?",
                "options": ["<menu>", "<nav>", "<links>", "<navigate>"],
                "answer": "<nav>"
            },
            {
                "question": "Which HTML element defines text that has been inserted into a document?",
                "options": ["<ins>", "<u>", "<add>", "<insert>"],
                "answer": "<ins>"
            },
            {
                "question": "Which HTML element defines text that has been deleted from a document?",
                "options": ["<delete>", "<removed>", "<del>", "<strike>"],
                "answer": "<del>"
            },
            {
                "question": "Which HTML tag is used for computer code text?",
                "options": ["<code>", "<keyboard>", "<type>", "<computer>"],
                "answer": "<code>"
            },
            {
                "question": "Which HTML tag is used to define keyboard input?",
                "options": ["<kbd>", "<keyboard>", "<input>", "<type>"],
                "answer": "<kbd>"
            },
            {
                "question": "Which HTML tag defines sample output from a computer program?",
                "options": ["<samp>", "<output>", "<sample>", "<program>"],
                "answer": "<samp>"
            },
            {
                "question": "Which HTML tag defines variable text?",
                "options": ["<var>", "<value>", "<v>", "<variable>"],
                "answer": "<var>"
            },
            {
                "question": "Which tag defines the document type declaration?",
                "options": ["<!DOCTYPE>", "<doctype>", "<html>", "<!HTML>"],
                "answer": "<!DOCTYPE>"
            },
            {
                "question": "Which HTML element defines an abbreviation or acronym?",
                "options": ["<abbr>", "<acronym>", "<short>", "<abbrv>"],
                "answer": "<abbr>"
            },
            {
                "question": "Which HTML tag defines the main content of a page?",
                "options": ["<main>", "<body>", "<section>", "<content>"],
                "answer": "<main>"
            },
            {
                "question": "Which HTML tag defines a sidebar section?",
                "options": ["<aside>", "<side>", "<sidebar>", "<section>"],
                "answer": "<aside>"
            },
            {
                "question": "Which HTML element is used to embed a document within another?",
                "options": ["<embed>", "<iframe>", "<frame>", "<import>"],
                "answer": "<iframe>"
            },
            {
                "question": "Which HTML tag is used to define inline style information?",
                "options": ["<style>", "<css>", "<inline>", "<design>"],
                "answer": "<style>"
            },
            {
                "question": "Which HTML element defines a script inside the document?",
                "options": ["<java>", "<script>", "<code>", "<run>"],
                "answer": "<script>"
            },
            {
                "question": "Which HTML attribute is used to provide inline CSS styles?",
                "options": ["style", "css", "design", "font"],
                "answer": "style"
            },
            {
                "question": "Which HTML tag is used to create a line across the page?",
                "options": ["<hr>", "<line>", "<border>", "<break>"],
                "answer": "<hr>"
            },
            {
                "question": "Which HTML element defines a group of related form elements?",
                "options": ["<fieldset>", "<group>", "<form>", "<section>"],
                "answer": "<fieldset>"
            },
            {
                "question": "Which tag is used to define a caption for a fieldset?",
                "options": ["<caption>", "<legend>", "<label>", "<head>"],
                "answer": "<legend>"
            },
            {
                "question": "Which tag defines the visible heading of a document?",
                "options": ["<head>", "<title>", "<h1>", "<heading>"],
                "answer": "<h1>"
            },
            {
                "question": "Which HTML tag is used to make text appear smaller?",
                "options": ["<small>", "<tiny>", "<short>", "<s>"],
                "answer": "<small>"
            },
            {
                "question": "Which HTML tag defines the background color of a page?",
                "options": ["<background>", "<body bgcolor>", "<color>", "<pagecolor>"],
                "answer": "<body bgcolor>"
            },
            {
                "question": "Which HTML tag is used to specify a title when hovering over an element?",
                "options": ["title", "hover", "alt", "caption"],
                "answer": "title"
            },
            {
                "question": "Which HTML element represents the progress of a task?",
                "options": ["<progress>", "<meter>", "<status>", "<bar>"],
                "answer": "<progress>"
            },
            {
                "question": "Which HTML tag represents a scalar measurement within a known range?",
                "options": ["<progress>", "<meter>", "<range>", "<bar>"],
                "answer": "<meter>"
            },
            {
                "question": "Which tag is used to define an image with clickable areas?",
                "options": ["<map>", "<area>", "<usemap>", "<imagemap>"],
                "answer": "<map>"
            },
            {
                "question": "Which tag defines the document’s character encoding?",
                "options": ["<meta charset>", "<encoding>", "<doctype>", "<script>"],
                "answer": "<meta charset>"
            },
            {
                "question": "Which tag defines the visible portion of an HTML document?",
                "options": ["<body>", "<main>", "<content>", "<section>"],
                "answer": "<body>"
            },
            {
                "question": "Which tag defines the browser tab text?",
                "options": ["<meta>", "<title>", "<head>", "<header>"],
                "answer": "<title>"
            },
            {
                "question": "Which tag defines a clickable button?",
                "options": ["<btn>", "<button>", "<click>", "<submit>"],
                "answer": "<button>"
            },
            {
                "question": "Which HTML element defines a short inline quotation?",
                "options": ["<q>", "<quote>", "<blockquote>", "<shortq>"],
                "answer": "<q>"
            },
            {
                "question": "Which tag defines highlighted text?",
                "options": ["<highlight>", "<mark>", "<b>", "<strong>"],
                "answer": "<mark>"
            },
            {
                "question": "Which tag is used to display preformatted text?",
                "options": ["<code>", "<text>", "<pre>", "<para>"],
                "answer": "<pre>"
            },
            {
                "question": "Which tag is used to add a background image to a page?",
                "options": ["<body background>", "<bg>", "<image>", "<style>"],
                "answer": "<body background>"
            },
            {
                "question": "Which HTML tag is used to define a data table header?",
                "options": ["<thead>", "<header>", "<top>", "<th>"],
                "answer": "<thead>"
            },
            {
                "question": "Which HTML tag defines the bottom section of a table?",
                "options": ["<tfoot>", "<footer>", "<bottom>", "<end>"],
                "answer": "<tfoot>"
            },
            {
                "question": "Which HTML tag is used to specify a list of commands?",
                "options": ["<menu>", "<command>", "<list>", "<options>"],
                "answer": "<menu>"
            },
            {
                "question": "Which tag defines a clickable email link?",
                "options": ["<mail>", "<a href='mailto:...'>", "<email>", "<contact>"],
                "answer": "<a href='mailto:...'>"
            },
            {
                "question": "Which HTML tag defines a time and date?",
                "options": ["<date>", "<time>", "<datetime>", "<clock>"],
                "answer": "<time>"
            },
            {
                "question": "Which tag defines a script executed by the browser?",
                "options": ["<script>", "<js>", "<code>", "<run>"],
                "answer": "<script>"
            },
            {
                "question": "Which tag defines a block of navigation links?",
                "options": ["<nav>", "<menu>", "<links>", "<navigate>"],
                "answer": "<nav>"
            },
            {
                "question": "Which tag defines the root element of an HTML page?",
                "options": ["<html>", "<head>", "<root>", "<body>"],
                "answer": "<html>"
            },
            {
                "question": "Which tag defines a container used to separate sections visually?",
                "options": ["<div>", "<section>", "<span>", "<group>"],
                "answer": "<div>"
            },
            {
                "question": "Which HTML element defines metadata about the document?",
                "options": ["<meta>", "<data>", "<info>", "<header>"],
                "answer": "<meta>"
            }
        ],
        intermediate: [
            {
                "question": "What does the <section> tag represent?",
                "options": ["A thematic grouping of content", "A navigation menu", "An image gallery", "A paragraph block"],
                "answer": "A thematic grouping of content"
            },
            {
                "question": "Which tag represents self-contained content like a news article?",
                "options": ["<article>", "<section>", "<div>", "<aside>"],
                "answer": "<article>"
            },
            {
                "question": "What is the purpose of the <aside> tag?",
                "options": ["To define content related to the main content", "To define the main content", "To define navigation", "To define a footer"],
                "answer": "To define content related to the main content"
            },
            {
                "question": "Which HTML tag is used for marking up navigation links?",
                "options": ["<nav>", "<header>", "<menu>", "<path>"],
                "answer": "<nav>"
            },
            {
                "question": "What is the purpose of the <figure> tag?",
                "options": ["To group images and their captions", "To style an image", "To define animation", "To display numeric data"],
                "answer": "To group images and their captions"
            },
            {
                "question": "What tag provides a caption for a <figure> element?",
                "options": ["<figcaption>", "<caption>", "<label>", "<title>"],
                "answer": "<figcaption>"
            },
            {
                "question": "Which tag defines the contact information for an author?",
                "options": ["<address>", "<author>", "<contact>", "<info>"],
                "answer": "<address>"
            },
            {
                "question": "Which tag specifies metadata like character set or viewport?",
                "options": ["<meta>", "<link>", "<head>", "<style>"],
                "answer": "<meta>"
            },
            {
                "question": "Which attribute defines the character encoding of an HTML document?",
                "options": ["charset", "encoding", "type", "lang"],
                "answer": "charset"
            },
            {
                "question": "Which tag is used to embed another HTML page inside a page?",
                "options": ["<iframe>", "<embed>", "<frame>", "<window>"],
                "answer": "<iframe>"
            },
            {
                "question": "Which attribute of <iframe> prevents the user from interacting with embedded content?",
                "options": ["sandbox", "disabled", "readonly", "block"],
                "answer": "sandbox"
            },
            {
                "question": "What does the <main> element represent?",
                "options": ["The dominant content of the document", "Navigation links", "Header content", "Sidebar content"],
                "answer": "The dominant content of the document"
            },
            {
                "question": "Which tag defines a client-side image map?",
                "options": ["<map>", "<area>", "<image>", "<usemap>"],
                "answer": "<map>"
            },
            {
                "question": "Which tag defines clickable areas in an image map?",
                "options": ["<area>", "<click>", "<hotspot>", "<region>"],
                "answer": "<area>"
            },
            {
                "question": "Which attribute is used with <area> to define shape?",
                "options": ["shape", "coords", "type", "alt"],
                "answer": "shape"
            },
            {
                "question": "Which HTML5 input type is used to select color?",
                "options": ["color", "palette", "pick", "choose"],
                "answer": "color"
            },
            {
                "question": "Which HTML5 input type allows users to select a date?",
                "options": ["date", "datetime", "calendar", "time"],
                "answer": "date"
            },
            {
                "question": "Which HTML5 input type allows multiple file uploads?",
                "options": ["file with multiple attribute", "upload", "multi-file", "attach"],
                "answer": "file with multiple attribute"
            },
            {
                "question": "What does the 'required' attribute do in forms?",
                "options": ["Makes the input field mandatory", "Adds a label", "Sets a placeholder", "Hides the field"],
                "answer": "Makes the input field mandatory"
            },
            {
                "question": "Which form attribute specifies where to send the form data?",
                "options": ["action", "method", "target", "destination"],
                "answer": "action"
            },
            {
                "question": "Which form attribute specifies how to send form data?",
                "options": ["method", "action", "type", "submit"],
                "answer": "method"
            },
            {
                "question": "Which attribute is used to disable form controls?",
                "options": ["disabled", "readonly", "inactive", "block"],
                "answer": "disabled"
            },
            {
                "question": "Which input type is used for email addresses?",
                "options": ["email", "text", "mail", "address"],
                "answer": "email"
            },
            {
                "question": "Which input type is used for numeric values?",
                "options": ["number", "digits", "int", "num"],
                "answer": "number"
            },
            {
                "question": "Which HTML tag is used to define data with a machine-readable value?",
                "options": ["<data>", "<value>", "<meta>", "<var>"],
                "answer": "<data>"
            },
            {
                "question": "Which element defines time or date information?",
                "options": ["<time>", "<date>", "<datetime>", "<moment>"],
                "answer": "<time>"
            },
            {
                "question": "Which tag defines a visible progress bar?",
                "options": ["<progress>", "<meter>", "<bar>", "<load>"],
                "answer": "<progress>"
            },
            {
                "question": "Which tag defines a scalar measurement like disk usage?",
                "options": ["<meter>", "<progress>", "<gauge>", "<scale>"],
                "answer": "<meter>"
            },
            {
                "question": "Which tag provides an alternate text track for a video?",
                "options": ["<track>", "<subtitle>", "<caption>", "<text>"],
                "answer": "<track>"
            },
            {
                "question": "Which attribute defines whether video starts automatically?",
                "options": ["autoplay", "auto", "start", "run"],
                "answer": "autoplay"
            },
            {
                "question": "Which attribute allows audio to play in a loop?",
                "options": ["loop", "repeat", "replay", "again"],
                "answer": "loop"
            },
            {
                "question": "Which HTML tag is used to embed vector graphics?",
                "options": ["<svg>", "<graphic>", "<vector>", "<canvas>"],
                "answer": "<svg>"
            },
            {
                "question": "Which HTML tag is used for drawing via scripts?",
                "options": ["<canvas>", "<draw>", "<graphic>", "<paint>"],
                "answer": "<canvas>"
            },
            {
                "question": "Which attribute specifies a short hint for input fields?",
                "options": ["placeholder", "hint", "label", "text"],
                "answer": "placeholder"
            },
            {
                "question": "Which attribute specifies the media type for a <link> element?",
                "options": ["type", "rel", "media", "format"],
                "answer": "type"
            },
            {
                "question": "Which attribute specifies the relationship between a document and linked file?",
                "options": ["rel", "href", "type", "ref"],
                "answer": "rel"
            },
            {
                "question": "Which HTML tag is used to group related form fields?",
                "options": ["<fieldset>", "<group>", "<block>", "<formgroup>"],
                "answer": "<fieldset>"
            },
            {
                "question": "Which tag provides a title for a <fieldset>?",
                "options": ["<legend>", "<caption>", "<label>", "<heading>"],
                "answer": "<legend>"
            },
            {
                "question": "What does the <datalist> tag do?",
                "options": ["Provides predefined options for input", "Displays a list", "Links a dropdown", "Creates a table"],
                "answer": "Provides predefined options for input"
            },
            {
                "question": "Which attribute connects an <input> to a <datalist>?",
                "options": ["list", "for", "data", "ref"],
                "answer": "list"
            },
            {
                "question": "Which element defines a description list?",
                "options": ["<dl>", "<list>", "<desc>", "<ul>"],
                "answer": "<dl>"
            },
            {
                "question": "Which element defines a term in a description list?",
                "options": ["<dt>", "<dd>", "<term>", "<desc>"],
                "answer": "<dt>"
            },
            {
                "question": "Which element defines the description in a description list?",
                "options": ["<dd>", "<dt>", "<desc>", "<dl>"],
                "answer": "<dd>"
            },
            {
                "question": "Which tag defines a user-defined variable?",
                "options": ["<var>", "<let>", "<code>", "<name>"],
                "answer": "<var>"
            },
            {
                "question": "Which tag defines the result of a calculation?",
                "options": ["<output>", "<result>", "<calc>", "<var>"],
                "answer": "<output>"
            },
            {
                "question": "Which HTML5 tag helps define navigation breadcrumbs?",
                "options": ["<nav>", "<breadcrumb>", "<path>", "<route>"],
                "answer": "<nav>"
            },
            {
                "question": "Which element is best for grouping related headings and subheadings?",
                "options": ["<header>", "<section>", "<head>", "<div>"],
                "answer": "<header>"
            },
            {
                "question": "Which attribute is used to identify a unique element?",
                "options": ["id", "class", "name", "ref"],
                "answer": "id"
            },
            {
                "question": "Which attribute groups similar elements for styling?",
                "options": ["class", "id", "group", "type"],
                "answer": "class"
            },
            {
                "question": "Which HTML tag is used to define inline styles?",
                "options": ["style", "css", "design", "format"],
                "answer": "style"
            },
            {
                "question": "Which attribute specifies a tooltip text?",
                "options": ["title", "tooltip", "info", "alt"],
                "answer": "title"
            },
            {
                "question": "Which HTML5 element is used for interactive controls?",
                "options": ["<details>", "<dialog>", "<summary>", "<button>"],
                "answer": "<details>"
            },
            {
                "question": "Which tag defines a visible summary for <details>?",
                "options": ["<summary>", "<caption>", "<title>", "<info>"],
                "answer": "<summary>"
            },
            {
                "question": "Which tag defines a modal dialog box?",
                "options": ["<dialog>", "<popup>", "<window>", "<modal>"],
                "answer": "<dialog>"
            },
            {
                "question": "Which attribute specifies text direction?",
                "options": ["dir", "lang", "flow", "align"],
                "answer": "dir"
            },
            {
                "question": "Which attribute specifies the language of the element?",
                "options": ["lang", "xml:lang", "language", "code"],
                "answer": "lang"
            },
            {
                "question": "Which element defines emphasized text for accessibility?",
                "options": ["<em>", "<i>", "<b>", "<strong>"],
                "answer": "<em>"
            },
            {
                "question": "Which element defines strong importance?",
                "options": ["<strong>", "<b>", "<em>", "<important>"],
                "answer": "<strong>"
            },
            {
                "question": "Which tag displays text as keyboard input?",
                "options": ["<kbd>", "<input>", "<code>", "<key>"],
                "answer": "<kbd>"
            },
            {
                "question": "Which tag represents sample program output?",
                "options": ["<samp>", "<output>", "<code>", "<var>"],
                "answer": "<samp>"
            },
            {
                "question": "Which tag defines inserted text?",
                "options": ["<ins>", "<add>", "<mark>", "<insert>"],
                "answer": "<ins>"
            },
            {
                "question": "Which tag defines deleted text?",
                "options": ["<del>", "<remove>", "<cut>", "<delete>"],
                "answer": "<del>"
            },
            {
                "question": "Which element defines highlighted text?",
                "options": ["<mark>", "<highlight>", "<b>", "<strong>"],
                "answer": "<mark>"
            },
            {
                "question": "Which tag defines superscript text?",
                "options": ["<sup>", "<up>", "<top>", "<super>"],
                "answer": "<sup>"
            },
            {
                "question": "Which tag defines subscript text?",
                "options": ["<sub>", "<down>", "<bottom>", "<low>"],
                "answer": "<sub>"
            },
            {
                "question": "Which attribute is used to specify inline CSS?",
                "options": ["style", "css", "inline", "format"],
                "answer": "style"
            },
            {
                "question": "Which tag defines a container for navigation links?",
                "options": ["<nav>", "<menu>", "<links>", "<header>"],
                "answer": "<nav>"
            },
            {
                "question": "Which HTML element is used to define responsive design viewport?",
                "options": ["<meta name='viewport'>", "<responsive>", "<viewport>", "<screen>"],
                "answer": "<meta name='viewport'>"
            },
            {
                "question": "Which tag defines a caption for a table?",
                "options": ["<caption>", "<label>", "<legend>", "<title>"],
                "answer": "<caption>"
            },
            {
                "question": "Which tag groups table rows?",
                "options": ["<tbody>", "<thead>", "<tfoot>", "<tr>"],
                "answer": "<tbody>"
            },
            {
                "question": "Which tag groups table header rows?",
                "options": ["<thead>", "<tbody>", "<tfoot>", "<tr>"],
                "answer": "<thead>"
            },
            {
                "question": "Which tag defines the table footer section?",
                "options": ["<tfoot>", "<bottom>", "<end>", "<summary>"],
                "answer": "<tfoot>"
            },
            {
                "question": "Which HTML5 feature allows embedding external content like YouTube videos?",
                "options": ["<iframe>", "<embed>", "<object>", "<video>"],
                "answer": "<iframe>"
            },
            {
                "question": "Which tag defines inline quotations?",
                "options": ["<q>", "<quote>", "<blockquote>", "<shortq>"],
                "answer": "<q>"
            },
            {
                "question": "Which tag defines long quotations?",
                "options": ["<blockquote>", "<q>", "<cite>", "<quote>"],
                "answer": "<blockquote>"
            },
            {
                "question": "Which tag specifies the source of a quote?",
                "options": ["<cite>", "<ref>", "<src>", "<source>"],
                "answer": "<cite>"
            },
            {
                "question": "Which attribute is used for specifying an image map in <img>?",
                "options": ["usemap", "map", "href", "area"],
                "answer": "usemap"
            },
            {
                "question": "Which tag defines an inline frame?",
                "options": ["<iframe>", "<frame>", "<embed>", "<window>"],
                "answer": "<iframe>"
            },
            {
                "question": "Which tag defines the base URL for all relative links?",
                "options": ["<base>", "<url>", "<link>", "<ref>"],
                "answer": "<base>"
            },
            {
                "question": "Which tag defines the title of a work or document?",
                "options": ["<cite>", "<title>", "<ref>", "<quote>"],
                "answer": "<cite>"
            },
            {
                "question": "Which element defines a comment in HTML?",
                "options": ["<!-- comment -->", "// comment", "# comment", "/* comment */"],
                "answer": "<!-- comment -->"
            },
            {
                "question": "Which tag defines the main content area of a document?",
                "options": ["<main>", "<body>", "<content>", "<section>"],
                "answer": "<main>"
            },
            {
                "question": "Which tag defines computer code text?",
                "options": ["<code>", "<pre>", "<samp>", "<kbd>"],
                "answer": "<code>"
            },
            {
                "question": "Which tag defines preformatted text that preserves spaces?",
                "options": ["<pre>", "<code>", "<text>", "<block>"],
                "answer": "<pre>"
            },
            {
                "question": "Which tag defines metadata about the document?",
                "options": ["<meta>", "<info>", "<head>", "<details>"],
                "answer": "<meta>"
            },
            {
                "question": "Which tag defines a clickable button?",
                "options": ["<button>", "<submit>", "<click>", "<press>"],
                "answer": "<button>"
            },
            {
                "question": "Which tag represents a footer for a document or section?",
                "options": ["<footer>", "<bottom>", "<end>", "<section>"],
                "answer": "<footer>"
            },
        ],
        advanced: [
            {
                "question": "Which HTML5 attribute allows embedding custom data attributes on any element?",
                "options": ["data-*", "custom-*", "attr-*", "meta-*"],
                "answer": "data-*"
            },
            {
                "question": "Which ARIA role is used to mark the main content landmark?",
                "options": ["main", "region", "banner", "complementary"],
                "answer": "main"
            },
            {
                "question": "Which ARIA attribute indicates an element is hidden from assistive technologies?",
                "options": ["aria-hidden=\"true\"", "aria-disabled=\"true\"", "aria-invisible=\"true\"", "aria-off=\"true\""],
                "answer": "aria-hidden=\"true\""
            },
            {
                "question": "Which HTML5 element is used for defining interactive dialog boxes?",
                "options": ["<dialog>", "<modal>", "<popup>", "<window>"],
                "answer": "<dialog>"
            },
            {
                "question": "Which attribute is used on <video> or <audio> to preload media metadata only?",
                "options": ["preload=\"metadata\"", "preload=\"auto\"", "preload=\"none\"", "preload=\"minimal\""],
                "answer": "preload=\"metadata\""
            },
            {
                "question": "Which <link> rel value is used to preload fonts for performance?",
                "options": ["preload", "prefetch", "stylesheet", "dns-prefetch"],
                "answer": "preload"
            },
            {
                "question": "Which <meta> attribute helps prevent XSS attacks by enforcing a content security policy?",
                "options": ["http-equiv=\"Content-Security-Policy\"", "name=\"security-policy\"", "http-equiv=\"X-XSS-Protection\"", "name=\"csp\""],
                "answer": "http-equiv=\"Content-Security-Policy\""
            },
            {
                "question": "Which element allows embedding JSON-LD structured data for SEO?",
                "options": ["<script type=\"application/ld+json\">", "<meta type=\"json-ld\">", "<data-json>", "<script type=\"json\">"],
                "answer": "<script type=\"application/ld+json\">"
            },
            {
                "question": "Which input type provides a native color picker?",
                "options": ["color", "palette", "picker", "choose"],
                "answer": "color"
            },
            {
                "question": "Which input type provides built-in browser validation for URLs?",
                "options": ["url", "text", "uri", "webaddress"],
                "answer": "url"
            },
            {
                "question": "Which input type provides native numeric step control with validation?",
                "options": ["number", "range", "digits", "numeric"],
                "answer": "number"
            },
            {
                "question": "Which HTML5 attribute allows an input field to be autofilled by the browser?",
                "options": ["autocomplete", "autofill", "autofocus", "autoentry"],
                "answer": "autocomplete"
            },
            {
                "question": "Which HTML5 element is used to define content that is tangentially related to the main content?",
                "options": ["<aside>", "<section>", "<article>", "<main>"],
                "answer": "<aside>"
            },
            {
                "question": "Which attribute allows an element to be focused automatically when the page loads?",
                "options": ["autofocus", "focus", "active", "tabindex"],
                "answer": "autofocus"
            },
            {
                "question": "Which attribute on <iframe> prevents the embedded page from accessing window.opener?",
                "options": ["sandbox", "secure", "rel=\"noopener\"", "safe"],
                "answer": "sandbox"
            },
            {
                "question": "Which <input> attribute restricts user input to a pattern using regex?",
                "options": ["pattern", "format", "validate", "match"],
                "answer": "pattern"
            },
            {
                "question": "Which element is used to group repeated media sources for <video> or <audio>?",
                "options": ["<source>", "<track>", "<media>", "<file>"],
                "answer": "<source>"
            },
            {
                "question": "Which attribute on <source> defines the MIME type of the media?",
                "options": ["type", "format", "media", "kind"],
                "answer": "type"
            },
            {
                "question": "Which element defines text tracks for video for subtitles or captions?",
                "options": ["<track>", "<subtitle>", "<caption>", "<text>"],
                "answer": "<track>"
            },
            {
                "question": "Which attribute indicates that a video should play inline on mobile devices instead of fullscreen?",
                "options": ["playsinline", "inline", "embedded", "mobileplay"],
                "answer": "playsinline"
            },
            {
                "question": "Which ARIA role is recommended for a navigation menu landmark?",
                "options": ["navigation", "main", "menu", "list"],
                "answer": "navigation"
            },
            {
                "question": "Which ARIA attribute indicates that an element is currently expanded?",
                "options": ["aria-expanded=\"true\"", "aria-open=\"true\"", "aria-active=\"true\"", "aria-show=\"true\""],
                "answer": "aria-expanded=\"true\""
            },
            {
                "question": "Which ARIA attribute defines a live region where updates are announced by screen readers?",
                "options": ["aria-live", "aria-update", "aria-announce", "aria-change"],
                "answer": "aria-live"
            },
            {
                "question": "Which <link> rel value is used to load a manifest for a Progressive Web App?",
                "options": ["manifest", "app", "webapp", "pwa"],
                "answer": "manifest"
            },
            {
                "question": "Which attribute helps prefetch DNS for external domains to improve performance?",
                "options": ["rel=\"dns-prefetch\"", "rel=\"preload\"", "rel=\"prefetch\"", "rel=\"shortcut\""],
                "answer": "rel=\"dns-prefetch\""
            },
            {
                "question": "Which <link> attribute preloads CSS to improve render speed?",
                "options": ["rel=\"preload\" as=\"style\"", "rel=\"stylesheet\"", "rel=\"prefetch\"", "rel=\"import\""],
                "answer": "rel=\"preload\" as=\"style\""
            },
            {
                "question": "Which <link> attribute hints the browser to preconnect to external resources?",
                "options": ["rel=\"preconnect\"", "rel=\"dns-prefetch\"", "rel=\"prerender\"", "rel=\"prefetch\""],
                "answer": "rel=\"preconnect\""
            },
            {
                "question": "Which element is best for storing reusable HTML fragments that are not rendered?",
                "options": ["<template>", "<fragment>", "<slot>", "<section>"],
                "answer": "<template>"
            },
            {
                "question": "Which attribute is required on <label> to associate it with an <input>?",
                "options": ["for", "id", "name", "aria-labelledby"],
                "answer": "for"
            },
            {
                "question": "Which HTML5 input type provides a slider control for numeric values?",
                "options": ["range", "number", "slider", "input-range"],
                "answer": "range"
            },
            {
                "question": "Which <input> attribute prevents editing but allows submission?",
                "options": ["readonly", "disabled", "immutable", "fixed"],
                "answer": "readonly"
            },
            {
                "question": "Which HTML5 form element allows the user to select predefined options?",
                "options": ["<datalist>", "<select>", "<options>", "<choices>"],
                "answer": "<datalist>"
            },
            {
                "question": "Which element specifies a reusable content slot inside a Web Component?",
                "options": ["<slot>", "<template>", "<fragment>", "<container>"],
                "answer": "<slot>"
            },
            {
                "question": "Which attribute on <input type=\"file\"> allows multiple file selection?",
                "options": ["multiple", "multiselect", "allowmultiple", "many"],
                "answer": "multiple"
            },
            {
                "question": "Which attribute indicates that an <input> element requires validation?",
                "options": ["required", "validate", "mandatory", "check"],
                "answer": "required"
            },
            {
                "question": "Which attribute on <a> prevents reverse tabnabbing when using target=\"_blank\"?",
                "options": ["rel=\"noopener\"", "rel=\"nofollow\"", "rel=\"external\"", "rel=\"safety\""],
                "answer": "rel=\"noopener\""
            },
            {
                "question": "Which ARIA attribute indicates that an element controls another element?",
                "options": ["aria-controls", "aria-manages", "aria-target", "aria-linked"],
                "answer": "aria-controls"
            },
            {
                "question": "Which ARIA attribute indicates the current page in a set of navigation links?",
                "options": ["aria-current", "aria-selected", "aria-page", "aria-index"],
                "answer": "aria-current"
            },
            {
                "question": "Which input type automatically formats numeric input as a telephone number on mobile?",
                "options": ["tel", "number", "text", "phone"],
                "answer": "tel"
            },
            {
                "question": "Which input type provides native email validation and keyboard optimization?",
                "options": ["email", "text", "mail", "address"],
                "answer": "email"
            },
            {
                "question": "Which input type allows users to pick a date and time together?",
                "options": ["datetime-local", "datetime", "calendar", "timestamp"],
                "answer": "datetime-local"
            },
            {
                "question": "Which input type shows a color picker in supported browsers?",
                "options": ["color", "palette", "picker", "hue"],
                "answer": "color"
            },
            {
                "question": "Which input type is used for selecting files?",
                "options": ["file", "upload", "document", "attach"],
                "answer": "file"
            },
            {
                "question": "Which HTML5 element is used for a group of controls that toggle options?",
                "options": ["<fieldset>", "<div>", "<section>", "<form>"],
                "answer": "<fieldset>"
            },
            {
                "question": "Which element specifies the default browser style for links and visited links?",
                "options": ["<style> or CSS pseudo-classes", "<link>", "<css>", "<default>"],
                "answer": "<style> or CSS pseudo-classes"
            },
            {
                "question": "Which element should be used for embedding scalable vector graphics?",
                "options": ["<svg>", "<canvas>", "<img>", "<vector>"],
                "answer": "<svg>"
            },
            {
                "question": "Which HTML5 attribute enables lazy-loading images to improve performance?",
                "options": ["loading=\"lazy\"", "defer", "async", "preload"],
                "answer": "loading=\"lazy\""
            },
            {
                "question": "Which <script> attribute ensures scripts execute after HTML parsing?",
                "options": ["defer", "async", "type", "nomodule"],
                "answer": "defer"
            },
            {
                "question": "Which <script> attribute allows asynchronous loading and execution?",
                "options": ["async", "defer", "type", "nomodule"],
                "answer": "async"
            },
            {
                "question": "Which <link> attribute hints the browser to prefetch resources?",
                "options": ["rel=\"prefetch\"", "rel=\"preload\"", "rel=\"dns-prefetch\"", "rel=\"stylesheet\""],
                "answer": "rel=\"prefetch\""
            },
            {
                "question": "Which HTML5 tag is used for an independent, self-contained composition?",
                "options": ["<article>", "<section>", "<div>", "<aside>"],
                "answer": "<article>"
            },
            {
                "question": "Which element is best for marking up a blog post or news item?",
                "options": ["<article>", "<section>", "<div>", "<main>"],
                "answer": "<article>"
            },
            {
                "question": "Which HTML5 element defines a generic container for flow content?",
                "options": ["<div>", "<span>", "<section>", "<article>"],
                "answer": "<div>"
            },
            {
                "question": "Which element defines inline text for styling purposes only?",
                "options": ["<span>", "<div>", "<section>", "<article>"],
                "answer": "<span>"
            },
            {
                "question": "Which HTML5 element defines the main heading of a page?",
                "options": ["<h1>", "<header>", "<title>", "<main>"],
                "answer": "<h1>"
            },
            {
                "question": "Which attribute specifies the media type for <source> elements?",
                "options": ["type", "format", "media", "src"],
                "answer": "type"
            },
            {
                "question": "Which element is used to mark content as important for accessibility?",
                "options": ["<strong>", "<b>", "<em>", "<i>"],
                "answer": "<strong>"
            },
            {
                "question": "Which element is used to emphasize text semantically?",
                "options": ["<em>", "<i>", "<strong>", "<b>"],
                "answer": "<em>"
            },
            {
                "question": "Which attribute indicates an input field should be autofocused on page load?",
                "options": ["autofocus", "focus", "active", "target"],
                "answer": "autofocus"
            },
            {
                "question": "Which element specifies a client-side image map?",
                "options": ["<map>", "<area>", "<img>", "<canvas>"],
                "answer": "<map>"
            },
            {
                "question": "Which element defines clickable areas in an image map?",
                "options": ["<area>", "<map>", "<link>", "<click>"],
                "answer": "<area>"
            },
            {
                "question": "Which attribute is used on <area> to define coordinates?",
                "options": ["coords", "shape", "position", "location"],
                "answer": "coords"
            },
            {
                "question": "Which attribute defines the shape of a clickable area in an image map?",
                "options": ["shape", "coords", "area-shape", "type"],
                "answer": "shape"
            },
            {
                "question": "Which HTML5 attribute allows specifying text direction?",
                "options": ["dir", "lang", "align", "flow"],
                "answer": "dir"
            },
            {
                "question": "Which HTML5 element defines navigation breadcrumbs for a page?",
                "options": ["<nav>", "<breadcrumb>", "<ol>", "<section>"],
                "answer": "<nav>"
            },
            {
                "question": "Which <meta> attribute controls viewport settings for responsive design?",
                "options": ["name=\"viewport\"", "name=\"responsive\"", "name=\"screen\"", "name=\"device\""],
                "answer": "name=\"viewport\""
            },
            {
                "question": "Which element allows you to define reusable, non-rendered HTML content?",
                "options": ["<template>", "<fragment>", "<slot>", "<div>"],
                "answer": "<template>"
            },
            {
                "question": "Which HTML5 element defines a caption for a table?",
                "options": ["<caption>", "<label>", "<legend>", "<title>"],
                "answer": "<caption>"
            },
            {
                "question": "Which HTML5 attribute allows images to be lazy-loaded?",
                "options": ["loading=\"lazy\"", "defer", "async", "preload"],
                "answer": "loading=\"lazy\""
            }
        ]
    },
    css: {
        beginners: [
            {
                "question": "What does CSS stand for?",
                "options": [
                    "Cascading Style Sheets",
                    "Computer Style Sheets",
                    "Creative Style System",
                    "Colorful Style Sheets"
                ],
                "answer": "Cascading Style Sheets"
            },
            {
                "question": "Which HTML tag is used to link a CSS file to an HTML document?",
                "options": [
                    "<link>",
                    "<style>",
                    "<css>",
                    "<script>"
                ],
                "answer": "<link>"
            },
            {
                "question": "How do you write a comment in CSS?",
                "options": [
                    "/* This is a comment */",
                    "// This is a comment",
                    "<!-- This is a comment -->",
                    "# This is a comment"
                ],
                "answer": "/* This is a comment */"
            },
            {
                "question": "Which property is used to change the background color?",
                "options": [
                    "background-color",
                    "color",
                    "bgcolor",
                    "background"
                ],
                "answer": "background-color"
            },
            {
                "question": "How do you select an element with the id 'header' in CSS?",
                "options": [
                    "#header",
                    ".header",
                    "header",
                    "*header"
                ],
                "answer": "#header"
            },
            {
                "question": "How do you select all elements with the class name 'menu'?",
                "options": [
                    ".menu",
                    "#menu",
                    "menu",
                    "*menu"
                ],
                "answer": ".menu"
            },
            {
                "question": "Which CSS property controls the text size?",
                "options": [
                    "font-size",
                    "text-style",
                    "font-style",
                    "text-size"
                ],
                "answer": "font-size"
            },
            {
                "question": "How do you make text bold in CSS?",
                "options": [
                    "font-weight: bold;",
                    "text-weight: bold;",
                    "font-style: bold;",
                    "text-style: bold;"
                ],
                "answer": "font-weight: bold;"
            },
            {
                "question": "How do you change the font of an element to Arial?",
                "options": [
                    "font-family: Arial;",
                    "font-style: Arial;",
                    "font-weight: Arial;",
                    "text-font: Arial;"
                ],
                "answer": "font-family: Arial;"
            },
            {
                "question": "Which property is used to change the text color?",
                "options": [
                    "color",
                    "background-color",
                    "font-color",
                    "text-color"
                ],
                "answer": "color"
            },
            {
                "question": "How do you make all paragraphs have a font size of 16 pixels?",
                "options": [
                    "p { font-size: 16px; }",
                    "p { text-size: 16px; }",
                    "p { font-style: 16px; }",
                    "p { size: 16px; }"
                ],
                "answer": "p { font-size: 16px; }"
            },
            {
                "question": "Which property is used to add space inside an element's border?",
                "options": [
                    "padding",
                    "margin",
                    "border-spacing",
                    "spacing"
                ],
                "answer": "padding"
            },
            {
                "question": "Which property is used to add space outside an element's border?",
                "options": [
                    "margin",
                    "padding",
                    "border-spacing",
                    "spacing"
                ],
                "answer": "margin"
            },
            {
                "question": "How do you remove the underline from a link?",
                "options": [
                    "text-decoration: none;",
                    "text-underline: none;",
                    "underline: none;",
                    "decoration: none;"
                ],
                "answer": "text-decoration: none;"
            },
            {
                "question": "Which property controls the width of an element?",
                "options": [
                    "width",
                    "size",
                    "length",
                    "weight"
                ],
                "answer": "width"
            },
            {
                "question": "Which property controls the height of an element?",
                "options": [
                    "height",
                    "length",
                    "size",
                    "depth"
                ],
                "answer": "height"
            },
            {
                "question": "How do you make an element invisible but still take space on the page?",
                "options": [
                    "visibility: hidden;",
                    "display: none;",
                    "opacity: 0;",
                    "hidden: true;"
                ],
                "answer": "visibility: hidden;"
            },
            {
                "question": "Which property hides an element completely and removes it from the page layout?",
                "options": [
                    "display: none;",
                    "visibility: hidden;",
                    "opacity: 0;",
                    "hidden: true;"
                ],
                "answer": "display: none;"
            },
            {
                "question": "What is the correct syntax to select all `<h1>` elements inside a div?",
                "options": [
                    "div h1",
                    "div.h1",
                    "div > h1",
                    "div+h1"
                ],
                "answer": "div h1"
            },
            {
                "question": "How do you apply a style only when the user hovers over an element?",
                "options": [
                    ":hover",
                    ":click",
                    ":active",
                    ":focus"
                ],
                "answer": ":hover"
            },
            {
                "question": "What is the default position value of an HTML element?",
                "options": [
                    "static",
                    "relative",
                    "absolute",
                    "fixed"
                ],
                "answer": "static"
            },
            {
                "question": "Which property is used to change the position of an element?",
                "options": [
                    "position",
                    "place",
                    "location",
                    "float"
                ],
                "answer": "position"
            },
            {
                "question": "Which CSS property is used to float an element to the right?",
                "options": [
                    "float: right;",
                    "position: right;",
                    "align: right;",
                    "text-align: right;"
                ],
                "answer": "float: right;"
            },
            {
                "question": "How do you clear a floated element?",
                "options": [
                    "clear: both;",
                    "float: none;",
                    "position: static;",
                    "overflow: hidden;"
                ],
                "answer": "clear: both;"
            },
            {
                "question": "Which unit is relative to the font size of the root element?",
                "options": [
                    "rem",
                    "em",
                    "px",
                    "%"
                ],
                "answer": "rem"
            },
            {
                "question": "What is the difference between `em` and `rem` units?",
                "options": [
                    "`em` is relative to the parent’s font size, `rem` is relative to the root font size",
                    "`em` is absolute, `rem` is relative",
                    "They are the same",
                    "`rem` is relative to parent, `em` is relative to root"
                ],
                "answer": "`em` is relative to the parent’s font size, `rem` is relative to the root font size"
            },
            {
                "question": "Which property changes the style of bullet points in a list?",
                "options": [
                    "list-style-type",
                    "list-style-position",
                    "bullet-style",
                    "list-decoration"
                ],
                "answer": "list-style-type"
            },
            {
                "question": "How do you center-align text inside an element?",
                "options": [
                    "text-align: center;",
                    "align: center;",
                    "center-text: true;",
                    "font-align: center;"
                ],
                "answer": "text-align: center;"
            },
            {
                "question": "What is the purpose of the `z-index` property?",
                "options": [
                    "Controls the stack order of overlapping elements",
                    "Controls the size of an element",
                    "Controls the transparency",
                    "Controls the border thickness"
                ],
                "answer": "Controls the stack order of overlapping elements"
            },
            {
                "question": "Which property is used to add a border to an element?",
                "options": [
                    "border",
                    "outline",
                    "box-shadow",
                    "border-style"
                ],
                "answer": "border"
            },
            {
                "question": "How do you make rounded corners on an element?",
                "options": [
                    "border-radius",
                    "corner-radius",
                    "round-corner",
                    "radius"
                ],
                "answer": "border-radius"
            },
            {
                "question": "How do you apply a background image in CSS?",
                "options": [
                    "background-image: url('image.jpg');",
                    "bg-image: url('image.jpg');",
                    "image: url('image.jpg');",
                    "background: image('image.jpg');"
                ],
                "answer": "background-image: url('image.jpg');"
            },
            {
                "question": "Which property controls the opacity of an element?",
                "options": [
                    "opacity",
                    "visibility",
                    "filter",
                    "alpha"
                ],
                "answer": "opacity"
            },
            {
                "question": "What value of the `display` property hides an element but keeps its space reserved?",
                "options": [
                    "visibility: hidden;",
                    "display: none;",
                    "opacity: 0;",
                    "hidden: true;"
                ],
                "answer": "visibility: hidden;"
            },
            {
                "question": "Which property is used to make text italic?",
                "options": [
                    "font-style: italic;",
                    "font-weight: italic;",
                    "text-style: italic;",
                    "font-variant: italic;"
                ],
                "answer": "font-style: italic;"
            },
            {
                "question": "What is the default display value of a `<div>` element?",
                "options": [
                    "block",
                    "inline",
                    "inline-block",
                    "none"
                ],
                "answer": "block"
            },
            {
                "question": "How do you select all elements on a page?",
                "options": [
                    "*",
                    "all",
                    "html",
                    "body"
                ],
                "answer": "*"
            },
            {
                "question": "What does the `inherit` value do in CSS?",
                "options": [
                    "Makes the property inherit its value from its parent element",
                    "Overrides all styles",
                    "Resets the property to default browser value",
                    "Makes the property initial"
                ],
                "answer": "Makes the property inherit its value from its parent element"
            },
            {
                "question": "Which CSS property adds shadow to text?",
                "options": [
                    "text-shadow",
                    "box-shadow",
                    "shadow",
                    "font-shadow"
                ],
                "answer": "text-shadow"
            },
            {
                "question": "How do you apply a style only to the first letter of a paragraph?",
                "options": [
                    "p::first-letter",
                    "p:first-letter",
                    "p:first-child",
                    "p::letter"
                ],
                "answer": "p::first-letter"
            },
            {
                "question": "How do you make a link color change when visited?",
                "options": [
                    "a:visited { color: purple; }",
                    "a:hover { color: purple; }",
                    "a.active { color: purple; }",
                    "a.clicked { color: purple; }"
                ],
                "answer": "a:visited { color: purple; }"
            },
            {
                "question": "How do you make a list horizontal instead of vertical?",
                "options": [
                    "Set `display: inline` or `inline-block` on the list items",
                    "Use `list-style-type: horizontal;`",
                    "Use `list-direction: horizontal;`",
                    "Set `float: vertical` on the list items"
                ],
                "answer": "Set `display: inline` or `inline-block` on the list items"
            },
            {
                "question": "What does the `box-sizing: border-box;` property do?",
                "options": [
                    "Includes padding and border in the element’s total width and height",
                    "Excludes padding and border from the element size",
                    "Adds border outside the element",
                    "Changes the box shape to square"
                ],
                "answer": "Includes padding and border in the element’s total width and height"
            },
            {
                "question": "How do you set the width of an element to 50% of its parent?",
                "options": [
                    "width: 50%;",
                    "width: 50px;",
                    "width: 50vw;",
                    "width: 50em;"
                ],
                "answer": "width: 50%;"
            },
            {
                "question": "What is the correct syntax for applying multiple classes to an HTML element?",
                "options": [
                    "class=\"class1 class2\"",
                    "class=\"class1, class2\"",
                    "class=\"class1; class2\"",
                    "class=\"class1+class2\""
                ],
                "answer": "class=\"class1 class2\""
            },
            {
                "question": "Which property controls the spacing between lines of text?",
                "options": [
                    "line-height",
                    "letter-spacing",
                    "text-indent",
                    "word-spacing"
                ],
                "answer": "line-height"
            },
            {
                "question": "How do you select the last child of a parent element in CSS?",
                "options": [
                    ":last-child",
                    ":last",
                    ":final-child",
                    ":end-child"
                ],
                "answer": ":last-child"
            },
            {
                "question": "Which CSS property controls the space between letters?",
                "options": [
                    "letter-spacing",
                    "word-spacing",
                    "line-height",
                    "text-indent"
                ],
                "answer": "letter-spacing"
            },
            {
                "question": "How do you make a list without bullets?",
                "options": [
                    "list-style-type: none;",
                    "list-style: no-bullets;",
                    "bullet: none;",
                    "list-decoration: none;"
                ],
                "answer": "list-style-type: none;"
            },
            {
                "question": "Which property can be used to control the transparency of an element?",
                "options": [
                    "opacity",
                    "visibility",
                    "display",
                    "filter"
                ],
                "answer": "opacity"
            },
            {
                "question": "What does the `float` property do in CSS?",
                "options": [
                    "Positions an element to the left or right, allowing other content to wrap around it",
                    "Changes the element's visibility",
                    "Centers the element",
                    "Sets element width"
                ],
                "answer": "Positions an element to the left or right, allowing other content to wrap around it"
            },
            {
                "question": "How do you clear a float in CSS?",
                "options": [
                    "clear: both;",
                    "float: none;",
                    "overflow: hidden;",
                    "display: block;"
                ],
                "answer": "clear: both;"
            },
            {
                "question": "Which property is used to change the style of the bullet points?",
                "options": [
                    "list-style-type",
                    "list-bullet-style",
                    "bullet-style",
                    "list-decoration"
                ],
                "answer": "list-style-type"
            },
            {
                "question": "Which CSS property is used to make text uppercase?",
                "options": [
                    "text-transform: uppercase;",
                    "font-variant: uppercase;",
                    "text-style: uppercase;",
                    "font-transform: uppercase;"
                ],
                "answer": "text-transform: uppercase;"
            },
            {
                "question": "How do you specify a fallback font in `font-family`?",
                "options": [
                    "font-family: Arial, sans-serif;",
                    "font-family: Arial or sans-serif;",
                    "font-family: Arial & sans-serif;",
                    "font-family: Arial / sans-serif;"
                ],
                "answer": "font-family: Arial, sans-serif;"
            },
            {
                "question": "Which property adds space between words in text?",
                "options": [
                    "word-spacing",
                    "letter-spacing",
                    "line-height",
                    "text-indent"
                ],
                "answer": "word-spacing"
            },
            {
                "question": "How do you add a shadow to a box?",
                "options": [
                    "box-shadow",
                    "text-shadow",
                    "shadow",
                    "border-shadow"
                ],
                "answer": "box-shadow"
            },
            {
                "question": "What does the `position: fixed;` property do?",
                "options": [
                    "Positions the element relative to the browser window and stays fixed during scroll",
                    "Positions the element relative to its parent",
                    "Positions the element in the normal flow",
                    "Positions the element relative to the viewport and scrolls with content"
                ],
                "answer": "Positions the element relative to the browser window and stays fixed during scroll"
            },
            {
                "question": "How do you make a button change color when clicked?",
                "options": [
                    "Use the `:active` pseudo-class",
                    "Use the `:hover` pseudo-class",
                    "Use the `:visited` pseudo-class",
                    "Use the `:focus` pseudo-class"
                ],
                "answer": "Use the `:active` pseudo-class"
            },
            {
                "question": "What is the default font size in most browsers?",
                "options": [
                    "16px",
                    "12px",
                    "14px",
                    "18px"
                ],
                "answer": "16px"
            },
            {
                "question": "How do you change the cursor to a pointer when hovering over an element?",
                "options": [
                    "cursor: pointer;",
                    "cursor: hand;",
                    "cursor: hover;",
                    "cursor: click;"
                ],
                "answer": "cursor: pointer;"
            },
            {
                "question": "How do you select an element with attribute `type='text'`?",
                "options": [
                    "input[type='text']",
                    "input.text",
                    "input#text",
                    "[type=text]"
                ],
                "answer": "input[type='text']"
            },
            {
                "question": "How do you add space between paragraphs?",
                "options": [
                    "margin",
                    "padding",
                    "spacing",
                    "border"
                ],
                "answer": "margin"
            },
            {
                "question": "What property controls the stacking order of elements?",
                "options": [
                    "z-index",
                    "stack-order",
                    "order",
                    "layer"
                ],
                "answer": "z-index"
            },
            {
                "question": "How do you specify a hexadecimal color value in CSS?",
                "options": [
                    "#FFFFFF",
                    "rgb(255,255,255)",
                    "white",
                    "hsl(0, 0%, 100%)"
                ],
                "answer": "#FFFFFF"
            },
            {
                "question": "How do you write a media query in CSS?",
                "options": [
                    "@media screen and (max-width: 600px) { }",
                    "@media (600px) { }",
                    "media screen and (max-width: 600px) { }",
                    "@screen and (max-width: 600px) { }"
                ],
                "answer": "@media screen and (max-width: 600px) { }"
            }
        ],
        intermediate: [
            {
                "question": "What is the difference between `relative`, `absolute`, and `fixed` positioning in CSS?",
                "options": [
                    "`relative` is positioned relative to its normal position, `absolute` is positioned relative to the nearest positioned ancestor, `fixed` is positioned relative to the viewport",
                    "`relative` is positioned relative to the viewport, `absolute` to parent, `fixed` to normal position",
                    "All three behave the same",
                    "`fixed` is relative to parent, `absolute` relative to viewport, `relative` relative to screen"
                ],
                "answer": "`relative` is positioned relative to its normal position, `absolute` is positioned relative to the nearest positioned ancestor, `fixed` is positioned relative to the viewport"
            },
            {
                "question": "What does the `inherit` keyword do in CSS?",
                "options": [
                    "Makes the property value inherit from its parent element",
                    "Resets the property to its default browser value",
                    "Overrides all styles",
                    "Makes the element invisible"
                ],
                "answer": "Makes the property value inherit from its parent element"
            },
            {
                "question": "Which pseudo-class is used to select the element that is currently being clicked?",
                "options": [
                    ":active",
                    ":hover",
                    ":focus",
                    ":visited"
                ],
                "answer": ":active"
            },
            {
                "question": "How do you apply styles to elements that are direct children of a specified parent?",
                "options": [
                    "Use the child combinator selector (`parent > child`)",
                    "Use the descendant selector (`parent child`)",
                    "Use the adjacent sibling selector (`parent + child`)",
                    "Use the general sibling selector (`parent ~ child`)"
                ],
                "answer": "Use the child combinator selector (`parent > child`)"
            },
            {
                "question": "What is the purpose of the CSS `calc()` function?",
                "options": [
                    "To perform calculations to set CSS property values dynamically",
                    "To calculate the size of an element automatically",
                    "To measure the length of text",
                    "To calculate the color values"
                ],
                "answer": "To perform calculations to set CSS property values dynamically"
            },
            {
                "question": "Which CSS property controls how content is aligned vertically within a flex container?",
                "options": [
                    "align-items",
                    "justify-content",
                    "align-content",
                    "flex-direction"
                ],
                "answer": "align-items"
            },
            {
                "question": "What is the default value of the `flex-direction` property in a flex container?",
                "options": [
                    "row",
                    "column",
                    "row-reverse",
                    "column-reverse"
                ],
                "answer": "row"
            },
            {
                "question": "How do you create a CSS grid container?",
                "options": [
                    "Set `display: grid;` on the container",
                    "Set `display: flex;` on the container",
                    "Set `display: block;` on the container",
                    "Set `display: inline-grid;` on the container"
                ],
                "answer": "Set `display: grid;` on the container"
            },
            {
                "question": "What does the CSS `z-index` property do?",
                "options": [
                    "Controls the stack order of elements",
                    "Sets the opacity level",
                    "Controls element visibility",
                    "Defines the size of an element"
                ],
                "answer": "Controls the stack order of elements"
            },
            {
                "question": "Which property is used to control the spacing between columns in CSS Grid?",
                "options": [
                    "grid-column-gap",
                    "grid-row-gap",
                    "grid-gap",
                    "column-spacing"
                ],
                "answer": "grid-column-gap"
            },
            {
                "question": "What does `min-width` do?",
                "options": [
                    "Sets the minimum width an element can have",
                    "Sets the maximum width an element can have",
                    "Sets the exact width an element will always have",
                    "Sets the initial width of an element"
                ],
                "answer": "Sets the minimum width an element can have"
            },
            {
                "question": "Which property would you use to make a flex container’s items wrap to the next line?",
                "options": [
                    "flex-wrap",
                    "flex-flow",
                    "flex-shrink",
                    "flex-grow"
                ],
                "answer": "flex-wrap"
            },
            {
                "question": "What does the `object-fit` property do?",
                "options": [
                    "Specifies how an image or video fits into its container",
                    "Controls image opacity",
                    "Sets background size",
                    "Controls element visibility"
                ],
                "answer": "Specifies how an image or video fits into its container"
            },
            {
                "question": "How can you create a responsive typography scale in CSS?",
                "options": [
                    "By using relative units like `em` or `rem`",
                    "By using only `px` units",
                    "By setting font sizes in percentages",
                    "By using absolute units like `cm` or `in`"
                ],
                "answer": "By using relative units like `em` or `rem`"
            },
            {
                "question": "Which CSS property controls the order of flex items?",
                "options": [
                    "order",
                    "z-index",
                    "position",
                    "flex-direction"
                ],
                "answer": "order"
            },
            {
                "question": "What is the difference between `em` and `rem` units?",
                "options": [
                    "`em` is relative to the font size of the parent, `rem` is relative to the root (html) font size",
                    "`em` and `rem` are exactly the same",
                    "`rem` is relative to the parent, `em` to the root",
                    "Both are fixed size units"
                ],
                "answer": "`em` is relative to the font size of the parent, `rem` is relative to the root (html) font size"
            },
            {
                "question": "Which pseudo-element is used to insert content before an element?",
                "options": [
                    "::before",
                    "::after",
                    ":first-child",
                    ":first-letter"
                ],
                "answer": "::before"
            },
            {
                "question": "How do you apply a style only to elements that are the first child of their parent?",
                "options": [
                    ":first-child",
                    ":first-of-type",
                    ":last-child",
                    ":nth-child(1)"
                ],
                "answer": ":first-child"
            },
            {
                "question": "What is the effect of the `box-sizing: border-box;` declaration?",
                "options": [
                    "Includes padding and border in the element’s total width and height",
                    "Excludes padding and border from the width and height",
                    "Adds extra space around the element",
                    "Changes element to inline display"
                ],
                "answer": "Includes padding and border in the element’s total width and height"
            },
            {
                "question": "Which CSS property is used to create shadows around elements?",
                "options": [
                    "box-shadow",
                    "text-shadow",
                    "shadow",
                    "border-shadow"
                ],
                "answer": "box-shadow"
            },
            {
                "question": "How do you target all `<input>` elements of type 'checkbox'?",
                "options": [
                    "input[type='checkbox']",
                    "input.checkbox",
                    "checkbox",
                    "[checkbox]"
                ],
                "answer": "input[type='checkbox']"
            },
            {
                "question": "What is the purpose of the CSS property `overflow`?",
                "options": [
                    "Controls what happens when content overflows an element’s box",
                    "Controls element opacity",
                    "Controls margin collapse",
                    "Controls padding size"
                ],
                "answer": "Controls what happens when content overflows an element’s box"
            },
            {
                "question": "How does `position: sticky;` behave?",
                "options": [
                    "Acts like relative until the element reaches a threshold, then behaves like fixed",
                    "Acts like absolute always",
                    "Is the same as fixed",
                    "Is the same as relative"
                ],
                "answer": "Acts like relative until the element reaches a threshold, then behaves like fixed"
            },
            {
                "question": "What is the difference between `visibility: hidden;` and `display: none;`?",
                "options": [
                    "`visibility: hidden;` hides the element but keeps space, `display: none;` removes it completely",
                    "Both do the same thing",
                    "`display: none;` hides but keeps space, `visibility: hidden;` removes element",
                    "`visibility: hidden;` makes element transparent"
                ],
                "answer": "`visibility: hidden;` hides the element but keeps space, `display: none;` removes it completely"
            },
            {
                "question": "Which property is used to control the speed of a CSS transition?",
                "options": [
                    "transition-duration",
                    "transition-speed",
                    "animation-duration",
                    "animation-speed"
                ],
                "answer": "transition-duration"
            },
            {
                "question": "What is the default value of the `flex-grow` property?",
                "options": [
                    "0",
                    "1",
                    "auto",
                    "none"
                ],
                "answer": "0"
            },
            {
                "question": "How can you make an element take all remaining space in a flex container?",
                "options": [
                    "Set `flex-grow: 1;`",
                    "Set `flex-shrink: 1;`",
                    "Set `flex-basis: 100%;`",
                    "Set `width: 100%;`"
                ],
                "answer": "Set `flex-grow: 1;`"
            },
            {
                "question": "How do you apply a CSS transition to an element?",
                "options": [
                    "Use the `transition` property with property name and duration",
                    "Use the `animation` property",
                    "Use the `transform` property",
                    "Use the `hover` pseudo-class"
                ],
                "answer": "Use the `transition` property with property name and duration"
            },
            {
                "question": "What is the CSS function to make colors semi-transparent?",
                "options": [
                    "rgba()",
                    "hsla()",
                    "transparent()",
                    "opacity()"
                ],
                "answer": "rgba()"
            },
            {
                "question": "Which property sets the space between grid rows?",
                "options": [
                    "grid-row-gap",
                    "grid-column-gap",
                    "grid-gap",
                    "row-spacing"
                ],
                "answer": "grid-row-gap"
            },
            {
                "question": "How can you center a block element horizontally with CSS?",
                "options": [
                    "Set `margin-left: auto; margin-right: auto;` and specify width",
                    "Set `text-align: center;`",
                    "Set `display: inline-block;`",
                    "Set `float: center;`"
                ],
                "answer": "Set `margin-left: auto; margin-right: auto;` and specify width"
            },
            {
                "question": "How can you make an element semi-transparent without affecting its children?",
                "options": [
                    "Use `background-color` with alpha channel (rgba)",
                    "Use `opacity` property",
                    "Use `filter: opacity();`",
                    "Use `visibility: hidden;`"
                ],
                "answer": "Use `background-color` with alpha channel (rgba)"
            },
            {
                "question": "Which property is used to control the style of a list's markers in CSS?",
                "options": [
                    "list-style-type",
                    "list-decoration",
                    "marker-style",
                    "bullet-style"
                ],
                "answer": "list-style-type"
            },
            {
                "question": "How do you hide an element but keep it accessible to screen readers?",
                "options": [
                    "Use `visibility: hidden;`",
                    "Use `display: none;`",
                    "Use `opacity: 0;`",
                    "Use `position: absolute; left: -9999px;`"
                ],
                "answer": "Use `position: absolute; left: -9999px;`"
            },
            {
                "question": "What does the `object-position` property control?",
                "options": [
                    "The position of replaced elements like images inside their box",
                    "Position of text inside an element",
                    "Position of floated elements",
                    "Position of background images"
                ],
                "answer": "The position of replaced elements like images inside their box"
            },
            {
                "question": "What is the effect of setting `pointer-events: none;` on an element?",
                "options": [
                    "The element does not respond to mouse events",
                    "The element is hidden",
                    "The element cannot be focused",
                    "The element becomes transparent"
                ],
                "answer": "The element does not respond to mouse events"
            },
            {
                "question": "How do you make text overflow with an ellipsis (…) when it is too long?",
                "options": [
                    "Use `white-space: nowrap; overflow: hidden; text-overflow: ellipsis;`",
                    "Use `text-overflow: hide;`",
                    "Use `overflow: visible;`",
                    "Use `text-wrap: ellipsis;`"
                ],
                "answer": "Use `white-space: nowrap; overflow: hidden; text-overflow: ellipsis;`"
            },
            {
                "question": "Which CSS property controls the spacing between lines in text?",
                "options": [
                    "line-height",
                    "letter-spacing",
                    "word-spacing",
                    "text-indent"
                ],
                "answer": "line-height"
            },
            {
                "question": "What is the purpose of the CSS `filter` property?",
                "options": [
                    "Applies visual effects like blur or grayscale to elements",
                    "Controls element opacity",
                    "Sets font styles",
                    "Sets background images"
                ],
                "answer": "Applies visual effects like blur or grayscale to elements"
            },
            {
                "question": "How do you select all even-numbered children of an element?",
                "options": [
                    ":nth-child(even)",
                    ":nth-child(2n+1)",
                    ":first-child",
                    ":last-child"
                ],
                "answer": ":nth-child(even)"
            },
            {
                "question": "What does the `will-change` property do?",
                "options": [
                    "Hints the browser about which properties might change to optimize performance",
                    "Changes the style of an element",
                    "Makes an element visible",
                    "Removes transition effects"
                ],
                "answer": "Hints the browser about which properties might change to optimize performance"
            },
            {
                "question": "How do you limit the maximum height of an element?",
                "options": [
                    "Use `max-height` property",
                    "Use `height` property",
                    "Use `min-height` property",
                    "Use `overflow` property"
                ],
                "answer": "Use `max-height` property"
            },
            {
                "question": "Which property allows you to create animations in CSS?",
                "options": [
                    "animation",
                    "transition",
                    "transform",
                    "keyframes"
                ],
                "answer": "animation"
            },
            {
                "question": "How can you center content vertically and horizontally using flexbox?",
                "options": [
                    "Set `display: flex; justify-content: center; align-items: center;`",
                    "Set `text-align: center; vertical-align: middle;`",
                    "Set `margin: auto;`",
                    "Set `position: absolute; top: 50%; left: 50%;`"
                ],
                "answer": "Set `display: flex; justify-content: center; align-items: center;`"
            },
            {
                "question": "What is the CSS property to control the rounding of an element's corners?",
                "options": [
                    "border-radius",
                    "border-round",
                    "corner-radius",
                    "radius"
                ],
                "answer": "border-radius"
            },
            {
                "question": "Which property would you use to set the background image of an element?",
                "options": [
                    "background-image",
                    "image",
                    "background-src",
                    "background-url"
                ],
                "answer": "background-image"
            },
            {
                "question": "How can you make an element take the full height of the viewport?",
                "options": [
                    "height: 100vh;",
                    "height: 100%;",
                    "height: 100px;",
                    "height: 100vw;"
                ],
                "answer": "height: 100vh;"
            },
            {
                "question": "What is the use of the `@keyframes` rule in CSS?",
                "options": [
                    "Defines the stages of an animation sequence",
                    "Creates media queries",
                    "Defines styles for pseudo-elements",
                    "Defines styles for flex items"
                ],
                "answer": "Defines the stages of an animation sequence"
            },
            {
                "question": "Which property is used to control the font weight?",
                "options": [
                    "font-weight",
                    "font-style",
                    "font-variant",
                    "font-size"
                ],
                "answer": "font-weight"
            },
            {
                "question": "What is the effect of `pointer-events: none;`?",
                "options": [
                    "The element does not respond to mouse/touch events",
                    "The element is invisible",
                    "The element is unclickable but responds to hover",
                    "The element is hidden but interactive"
                ],
                "answer": "The element does not respond to mouse/touch events"
            },
            {
                "question": "How can you make an element sticky on scroll?",
                "options": [
                    "Use `position: sticky;` with a `top` value",
                    "Use `position: fixed;`",
                    "Use `position: relative;`",
                    "Use `position: absolute;`"
                ],
                "answer": "Use `position: sticky;` with a `top` value"
            },
            {
                "question": "Which property controls the space between letters in text?",
                "options": [
                    "letter-spacing",
                    "word-spacing",
                    "line-height",
                    "text-indent"
                ],
                "answer": "letter-spacing"
            },
            {
                "question": "Which unit is relative to the root element's font size?",
                "options": [
                    "rem",
                    "em",
                    "px",
                    "vw"
                ],
                "answer": "rem"
            },
            {
                "question": "What does the CSS `transition-timing-function` property do?",
                "options": [
                    "Defines the speed curve of a transition",
                    "Sets the transition duration",
                    "Sets the transition delay",
                    "Defines which properties to transition"
                ],
                "answer": "Defines the speed curve of a transition"
            },
            {
                "question": "How can you hide the scrollbar but still allow scrolling?",
                "options": [
                    "Use `overflow: auto; scrollbar-width: none;` and `::-webkit-scrollbar { display: none; }`",
                    "Use `overflow: hidden;`",
                    "Use `display: none;`",
                    "Use `visibility: hidden;`"
                ],
                "answer": "Use `overflow: auto; scrollbar-width: none;` and `::-webkit-scrollbar { display: none; }`"
            },
            {
                "question": "What does the CSS `grid-template-columns` property do?",
                "options": [
                    "Defines the number and size of columns in a grid",
                    "Defines row heights",
                    "Defines grid gaps",
                    "Defines grid areas"
                ],
                "answer": "Defines the number and size of columns in a grid"
            },
            {
                "question": "What is the default display value of the `<span>` element?",
                "options": [
                    "inline",
                    "block",
                    "inline-block",
                    "none"
                ],
                "answer": "inline"
            },
            {
                "question": "How do you specify a fallback font in a font-family declaration?",
                "options": [
                    "font-family: Arial, sans-serif;",
                    "font-family: Arial or sans-serif;",
                    "font-family: Arial & sans-serif;",
                    "font-family: Arial / sans-serif;"
                ],
                "answer": "font-family: Arial, sans-serif;"
            },
            {
                "question": "How do you make an element take up half the width of its container using flexbox?",
                "options": [
                    "Set `flex: 0 0 50%;`",
                    "Set `width: 50%;`",
                    "Set `flex-grow: 1;`",
                    "Set `flex-shrink: 1;`"
                ],
                "answer": "Set `flex: 0 0 50%;`"
            },
            {
                "question": "Which property is used to control the text wrapping behavior in CSS?",
                "options": [
                    "white-space",
                    "word-wrap",
                    "text-wrap",
                    "text-overflow"
                ],
                "answer": "white-space"
            },
            {
                "question": "Which CSS property controls how elements float around other elements?",
                "options": [
                    "float",
                    "clear",
                    "position",
                    "display"
                ],
                "answer": "float"
            },
            {
                "question": "How can you make a grid item span multiple columns?",
                "options": [
                    "Use `grid-column: start / end;`",
                    "Use `grid-row: start / end;`",
                    "Use `grid-area: span;`",
                    "Use `grid-span-columns`"
                ],
                "answer": "Use `grid-column: start / end;`"
            },
            {
                "question": "What is the effect of the `visibility` property when set to `collapse` in a table row?",
                "options": [
                    "Hides the row and collapses space, similar to display:none",
                    "Hides the row but keeps space",
                    "Makes the row invisible but still interactive",
                    "No effect"
                ],
                "answer": "Hides the row and collapses space, similar to display:none"
            },
            {
                "question": "Which CSS property would you use to add space inside an element's border?",
                "options": [
                    "padding",
                    "margin",
                    "border-spacing",
                    "gap"
                ],
                "answer": "padding"
            },
            {
                "question": "How do you make an element's background image cover the entire element area?",
                "options": [
                    "background-size: cover;",
                    "background-size: contain;",
                    "background-repeat: no-repeat;",
                    "background-position: center;"
                ],
                "answer": "background-size: cover;"
            }
        ],
        advanced: [
            {
                "question": "What is the difference between `contain: layout` and `contain: paint` in CSS containment?",
                "options": [
                    "`layout` contains layout and paint, `paint` only contains paint",
                    "`layout` isolates layout calculations, `paint` isolates paint rendering",
                    "`paint` isolates layout calculations, `layout` isolates paint",
                    "Both are the same"
                ],
                "answer": "`layout` isolates layout calculations, `paint` isolates paint rendering"
            },
            {
                "question": "How does the CSS `all` property work?",
                "options": [
                    "Resets all CSS properties on an element to their initial or inherited values",
                    "Applies a style to all elements on a page",
                    "Targets all pseudo-elements",
                    "Inherits all styles from parent"
                ],
                "answer": "Resets all CSS properties on an element to their initial or inherited values"
            },
            {
                "question": "What is the effect of `isolation: isolate;` in CSS?",
                "options": [
                    "Creates a new stacking context to isolate blending and z-index",
                    "Isolates an element from pointer events",
                    "Makes an element opaque",
                    "Prevents inheritance of styles"
                ],
                "answer": "Creates a new stacking context to isolate blending and z-index"
            },
            {
                "question": "How do you create a CSS variable, and how do you use it?",
                "options": [
                    "Declare with `--variable-name: value;` and use with `var(--variable-name)`",
                    "Declare with `var: variable-name;` and use with `--variable-name`",
                    "Declare with `$variable-name: value;` and use with `$variable-name`",
                    "Declare with `@variable-name: value;` and use with `@variable-name`"
                ],
                "answer": "Declare with `--variable-name: value;` and use with `var(--variable-name)`"
            },
            {
                "question": "Which CSS function can be used to darken or lighten colors dynamically?",
                "options": [
                    "color-mod()",
                    "rgb()",
                    "hsl()",
                    "opacity()"
                ],
                "answer": "color-mod()"
            },
            {
                "question": "What does the `backdrop-filter` property do?",
                "options": [
                    "Applies graphical effects like blur or color shift to the area behind an element",
                    "Applies effects to the element itself",
                    "Creates a filter on background images only",
                    "Filters visible children"
                ],
                "answer": "Applies graphical effects like blur or color shift to the area behind an element"
            },
            {
                "question": "How is `subgrid` used in CSS Grid layouts?",
                "options": [
                    "It allows a grid container to inherit the grid lines of its parent grid",
                    "It creates a nested grid independent of parent",
                    "It defines grid areas",
                    "It sets sub-elements to inline grid"
                ],
                "answer": "It allows a grid container to inherit the grid lines of its parent grid"
            },
            {
                "question": "Explain the difference between `transform: translate()` and `position: relative` for moving elements.",
                "options": [
                    "`translate()` does not affect document flow or cause reflow, while `relative` positioning moves and affects flow",
                    "`relative` does not move element visually, `translate()` does",
                    "Both affect document flow",
                    "Neither affect document flow"
                ],
                "answer": "`translate()` does not affect document flow or cause reflow, while `relative` positioning moves and affects flow"
            },
            {
                "question": "What is the CSS `contain-intrinsic-size` property used for?",
                "options": [
                    "To provide an intrinsic size for elements with containment",
                    "To set intrinsic font sizes",
                    "To specify default sizes for images",
                    "To control intrinsic padding"
                ],
                "answer": "To provide an intrinsic size for elements with containment"
            },
            {
                "question": "What is the purpose of the `will-change` property, and when should you use it?",
                "options": [
                    "To inform the browser about upcoming changes to optimize rendering; use sparingly to avoid performance issues",
                    "To reset styles",
                    "To trigger repaint immediately",
                    "To prevent animations"
                ],
                "answer": "To inform the browser about upcoming changes to optimize rendering; use sparingly to avoid performance issues"
            },
            {
                "question": "How does the `filter` property with `drop-shadow()` differ from `box-shadow`?",
                "options": [
                    "`drop-shadow()` applies shadow to the rendered image including transparency, `box-shadow` applies shadow to box only",
                    "`box-shadow` shadows the text, `drop-shadow()` shadows the box",
                    "Both behave identically",
                    "`drop-shadow()` shadows the border only"
                ],
                "answer": "`drop-shadow()` applies shadow to the rendered image including transparency, `box-shadow` applies shadow to box only"
            },
            {
                "question": "What is the effect of setting `pointer-events: none;` on a parent element?",
                "options": [
                    "Disables mouse interactions for the element and its children",
                    "Disables pointer events only on children",
                    "Disables pointer events on siblings",
                    "No effect on children"
                ],
                "answer": "Disables mouse interactions for the element and its children"
            },
            {
                "question": "Explain how the `scroll-snap-type` property works.",
                "options": [
                    "Defines how scrolling containers snap to child elements during scroll",
                    "Controls scroll speed",
                    "Controls visibility of scrollbar",
                    "Enables infinite scrolling"
                ],
                "answer": "Defines how scrolling containers snap to child elements during scroll"
            },
            {
                "question": "What does `mix-blend-mode` control?",
                "options": [
                    "How an element's content blends with the background",
                    "The opacity of an element",
                    "The z-index stacking order",
                    "The filter applied to an element"
                ],
                "answer": "How an element's content blends with the background"
            },
            {
                "question": "Describe the effect of `contain: size`.",
                "options": [
                    "Limits an element's size to avoid affecting ancestor layout",
                    "Restricts element visibility",
                    "Restricts element positioning",
                    "Limits the number of child elements"
                ],
                "answer": "Limits an element's size to avoid affecting ancestor layout"
            },
            {
                "question": "How does `aspect-ratio` affect element sizing?",
                "options": [
                    "Maintains a fixed width-to-height ratio regardless of container size",
                    "Fixes width only",
                    "Fixes height only",
                    "Ignores size settings"
                ],
                "answer": "Maintains a fixed width-to-height ratio regardless of container size"
            },
            {
                "question": "What is the purpose of `content-visibility: auto;`?",
                "options": [
                    "Allows the browser to skip rendering offscreen content for performance",
                    "Makes content invisible",
                    "Controls text visibility",
                    "Forces rendering of hidden elements"
                ],
                "answer": "Allows the browser to skip rendering offscreen content for performance"
            },
            {
                "question": "How can you control which elements participate in a CSS grid's auto-placement algorithm?",
                "options": [
                    "By specifying `grid-column` and `grid-row` on items or leaving unset for auto-placement",
                    "By setting display block",
                    "By setting float left",
                    "By setting position absolute"
                ],
                "answer": "By specifying `grid-column` and `grid-row` on items or leaving unset for auto-placement"
            },
            {
                "question": "What is the use of the `fit-content()` function in CSS?",
                "options": [
                    "Defines a size that fits content but does not exceed a max value",
                    "Sets fixed size",
                    "Fits container size",
                    "Creates flexible gaps"
                ],
                "answer": "Defines a size that fits content but does not exceed a max value"
            },
            {
                "question": "How do `min()` and `max()` functions work in CSS?",
                "options": [
                    "`min()` returns the smallest value, `max()` returns the largest from given expressions",
                    "Both set minimum size",
                    "Both set maximum size",
                    "Both are deprecated"
                ],
                "answer": "`min()` returns the smallest value, `max()` returns the largest from given expressions"
            },
            {
                "question": "Explain the `env()` function in CSS.",
                "options": [
                    "Accesses environment variables like safe-area-inset on devices",
                    "Calls system environment variables",
                    "Deprecated function",
                    "Accesses CSS variables"
                ],
                "answer": "Accesses environment variables like safe-area-inset on devices"
            },
            {
                "question": "What is the CSS Houdini API?",
                "options": [
                    "A set of APIs allowing developers to extend CSS by hooking into the rendering pipeline",
                    "A new CSS framework",
                    "A deprecated CSS feature",
                    "A CSS preprocessor"
                ],
                "answer": "A set of APIs allowing developers to extend CSS by hooking into the rendering pipeline"
            },
            {
                "question": "How do `contain: strict;` and `contain: content;` differ?",
                "options": [
                    "`strict` applies layout, style, and paint containment; `content` applies only layout and style",
                    "`content` applies all containment; `strict` applies none",
                    "`strict` isolates paint only; `content` isolates layout only",
                    "Both are identical"
                ],
                "answer": "`strict` applies layout, style, and paint containment; `content` applies only layout and style"
            },
            {
                "question": "Explain the difference between `rem` and `em` units.",
                "options": [
                    "`rem` is relative to root font size, `em` is relative to the font size of the parent element",
                    "`em` is root-relative, `rem` is parent-relative",
                    "Both are fixed units",
                    "`rem` is pixels, `em` is percentages"
                ],
                "answer": "`rem` is relative to root font size, `em` is relative to the font size of the parent element"
            },
            {
                "question": "How does the CSS `scroll-behavior` property affect user experience?",
                "options": [
                    "Controls smoothness of scrolling, e.g., `auto` vs `smooth`",
                    "Enables infinite scrolling",
                    "Hides the scrollbar",
                    "Locks scroll position"
                ],
                "answer": "Controls smoothness of scrolling, e.g., `auto` vs `smooth`"
            },
            {
                "question": "What does the `grid-auto-flow` property do?",
                "options": [
                    "Defines how auto-placed items are inserted in the grid (row/column/dense)",
                    "Controls grid gap size",
                    "Sets grid template",
                    "Defines grid item order"
                ],
                "answer": "Defines how auto-placed items are inserted in the grid (row/column/dense)"
            },
            {
                "question": "What is the main difference between `visibility: hidden;` and `display: none;`?",
                "options": [
                    "`visibility: hidden` hides the element but keeps layout space; `display: none` removes element from layout",
                    "`display: none` hides the element but keeps space; `visibility: hidden` removes it",
                    "Both remove element from layout",
                    "Both keep the element visible"
                ],
                "answer": "`visibility: hidden` hides the element but keeps layout space; `display: none` removes element from layout"
            },
            {
                "question": "How can you force GPU acceleration for an element?",
                "options": [
                    "Use `transform: translateZ(0);` or `will-change: transform;`",
                    "Use `display: block;`",
                    "Set `opacity: 0.99;`",
                    "Use `position: relative;`"
                ],
                "answer": "Use `transform: translateZ(0);` or `will-change: transform;`"
            },
            {
                "question": "What is the purpose of the `@supports` rule in CSS?",
                "options": [
                    "To apply styles conditionally based on browser support for CSS features",
                    "To import external stylesheets",
                    "To define keyframe animations",
                    "To declare variables"
                ],
                "answer": "To apply styles conditionally based on browser support for CSS features"
            },
            {
                "question": "What does the `contain: paint;` property ensure?",
                "options": [
                    "Restricts the element’s painting to itself, preventing paint leakage",
                    "Restricts layout calculations",
                    "Restricts style inheritance",
                    "Prevents the element from being displayed"
                ],
                "answer": "Restricts the element’s painting to itself, preventing paint leakage"
            },
            {
                "question": "How can you create a responsive typography system in CSS?",
                "options": [
                    "Using `clamp()` with `min`, `preferred`, and `max` font sizes",
                    "Using fixed pixel font sizes",
                    "Using only `em` units",
                    "Using `vh` units only"
                ],
                "answer": "Using `clamp()` with `min`, `preferred`, and `max` font sizes"
            },
            {
                "question": "What’s the difference between `filter: blur(5px);` and `backdrop-filter: blur(5px);`?",
                "options": [
                    "`filter` blurs the element itself; `backdrop-filter` blurs whatever is behind the element",
                    "`backdrop-filter` blurs the element; `filter` blurs background",
                    "Both blur the element",
                    "Neither blurs anything"
                ],
                "answer": "`filter` blurs the element itself; `backdrop-filter` blurs whatever is behind the element"
            },
            {
                "question": "How does the `ch` unit work in CSS?",
                "options": [
                    "Represents the width of the '0' (zero) glyph in the element’s font",
                    "Represents the height of a character",
                    "Relative to the parent element’s width",
                    "Equivalent to 1px"
                ],
                "answer": "Represents the width of the '0' (zero) glyph in the element’s font"
            },
            {
                "question": "What is the difference between `inline`, `inline-block`, and `block` display values?",
                "options": [
                    "`inline` doesn’t accept width/height; `inline-block` accepts width/height but flows inline; `block` takes full width and starts on new line",
                    "`block` doesn’t accept width; `inline-block` takes full width; `inline` takes new line",
                    "All behave the same",
                    "`inline-block` and `block` are identical"
                ],
                "answer": "`inline` doesn’t accept width/height; `inline-block` accepts width/height but flows inline; `block` takes full width and starts on new line"
            },
            {
                "question": "How can you style scrollbar in modern browsers?",
                "options": [
                    "Using `::-webkit-scrollbar` pseudo-elements and CSS Scrollbar specification",
                    "Using `scrollbar-style` property only",
                    "Using JavaScript only",
                    "Scrollbars cannot be styled"
                ],
                "answer": "Using `::-webkit-scrollbar` pseudo-elements and CSS Scrollbar specification"
            },
            {
                "question": "What does `scroll-padding` property do in CSS Scroll Snap?",
                "options": [
                    "Adds padding around the snap area when scrolling stops",
                    "Adds padding inside scroll containers",
                    "Controls scrollbar size",
                    "Disables scrolling"
                ],
                "answer": "Adds padding around the snap area when scrolling stops"
            },
            {
                "question": "Explain how `min-content`, `max-content`, and `fit-content` work in CSS sizing.",
                "options": [
                    "`min-content` is smallest size without overflow, `max-content` is largest size without wrapping, `fit-content` clamps size between min and max",
                    "All are identical",
                    "`max-content` is smallest, `min-content` is largest",
                    "None are valid CSS functions"
                ],
                "answer": "`min-content` is smallest size without overflow, `max-content` is largest size without wrapping, `fit-content` clamps size between min and max"
            },
            {
                "question": "What is the `:is()` pseudo-class used for?",
                "options": [
                    "Simplifies multiple selectors by grouping them inside `:is()`",
                    "Selects only the first element",
                    "Selects hidden elements",
                    "Applies styles conditionally based on attributes"
                ],
                "answer": "Simplifies multiple selectors by grouping them inside `:is()`"
            },
            {
                "question": "What is the purpose of the CSS `shape-outside` property?",
                "options": [
                    "Defines the shape around which inline content wraps",
                    "Sets the clipping region",
                    "Defines the border shape",
                    "Positions floating elements"
                ],
                "answer": "Defines the shape around which inline content wraps"
            },
            {
                "question": "How do you prevent margin collapsing between adjacent elements?",
                "options": [
                    "Add padding or borders between them or use overflow properties",
                    "Use negative margins",
                    "Use floats",
                    "Use absolute positioning"
                ],
                "answer": "Add padding or borders between them or use overflow properties"
            },
            {
                "question": "How does `font-display: swap;` affect web font loading?",
                "options": [
                    "Shows fallback font immediately and swaps to custom font once loaded",
                    "Blocks text until font loads",
                    "Hides text during font loading",
                    "Disables font loading"
                ],
                "answer": "Shows fallback font immediately and swaps to custom font once loaded"
            },
            {
                "question": "What are the limitations of CSS variables?",
                "options": [
                    "Cannot be used in media queries or pseudo-elements’ selectors directly",
                    "Cannot store colors",
                    "Only work with font properties",
                    "Cannot be inherited"
                ],
                "answer": "Cannot be used in media queries or pseudo-elements’ selectors directly"
            },
            {
                "question": "How do you define custom media queries with `@custom-media`?",
                "options": [
                    "Allows you to declare reusable media queries with a name",
                    "Defines animations",
                    "Declares variables",
                    "Imports external CSS"
                ],
                "answer": "Allows you to declare reusable media queries with a name"
            },
            {
                "question": "What is the effect of `contain: size layout;` on an element?",
                "options": [
                    "Limits size and layout calculations to improve performance",
                    "Hides the element",
                    "Disables event handling",
                    "Prevents inheritance"
                ],
                "answer": "Limits size and layout calculations to improve performance"
            },
            {
                "question": "How can you trigger hardware acceleration on an element?",
                "options": [
                    "Using 3D transforms like `transform: translateZ(0);` or `will-change: transform;`",
                    "Using `opacity: 0;`",
                    "Using `display: none;`",
                    "Using `float: left;`"
                ],
                "answer": "Using 3D transforms like `transform: translateZ(0);` or `will-change: transform;`"
            },
            {
                "question": "What is the difference between `overflow: hidden;` and `clip-path` for hiding overflow content?",
                "options": [
                    "`overflow: hidden` clips rectangular overflow, `clip-path` can clip to any shape",
                    "`clip-path` hides overflow with a fade",
                    "`overflow: hidden` creates scrollbars",
                    "Both behave identically"
                ],
                "answer": "`overflow: hidden` clips rectangular overflow, `clip-path` can clip to any shape"
            },
            {
                "question": "How does the `object-fit` property work?",
                "options": [
                    "Defines how replaced elements like images or videos fit within their container",
                    "Fits the container to the object size",
                    "Controls flexbox alignment",
                    "Sets text wrapping"
                ],
                "answer": "Defines how replaced elements like images or videos fit within their container"
            },
            {
                "question": "What is the role of `contain: paint` in improving rendering performance?",
                "options": [
                    "Prevents an element’s painting from affecting outside elements, reducing repaint scope",
                    "Reduces file size",
                    "Improves text rendering",
                    "Increases element size"
                ],
                "answer": "Prevents an element’s painting from affecting outside elements, reducing repaint scope"
            },
            {
                "question": "What does `place-content: center;` do in CSS Grid?",
                "options": [
                    "Centers grid items vertically and horizontally within the grid container",
                    "Places content at top left",
                    "Aligns items to the start",
                    "Creates space between items"
                ],
                "answer": "Centers grid items vertically and horizontally within the grid container"
            },
            {
                "question": "How do the `steps()` timing function and `cubic-bezier()` differ?",
                "options": [
                    "`steps()` creates discrete jumps in animation; `cubic-bezier()` creates smooth curves",
                    "`steps()` is deprecated",
                    "`cubic-bezier()` is only for transitions",
                    "Both are identical"
                ],
                "answer": "`steps()` creates discrete jumps in animation; `cubic-bezier()` creates smooth curves"
            },
            {
                "question": "What is the CSS `:where()` pseudo-class and how does it differ from `:is()`?",
                "options": [
                    "`:where()` has zero specificity, `:is()` takes the specificity of the most specific selector inside",
                    "`:where()` selects first child only",
                    "`:is()` is deprecated",
                    "Both are the same"
                ],
                "answer": "`:where()` has zero specificity, `:is()` takes the specificity of the most specific selector inside"
            },
            {
                "question": "How can you use CSS logical properties?",
                "options": [
                    "Use properties like `margin-inline-start` and `padding-block-end` to adapt layouts for different writing modes",
                    "Only used for margins",
                    "Replaces all CSS properties",
                    "CSS logical properties are deprecated"
                ],
                "answer": "Use properties like `margin-inline-start` and `padding-block-end` to adapt layouts for different writing modes"
            },
            {
                "question": "What is the difference between `grid-template-areas` and `grid-area`?",
                "options": [
                    "`grid-template-areas` defines the layout template; `grid-area` assigns a grid item to an area",
                    "Both do the same",
                    "`grid-area` defines the layout",
                    "`grid-template-areas` assigns grid items"
                ],
                "answer": "`grid-template-areas` defines the layout template; `grid-area` assigns a grid item to an area"
            },
            {
                "question": "What is the use of the `contain: style;` property?",
                "options": [
                    "Limits style recalculations to the element and its descendants",
                    "Prevents style inheritance",
                    "Makes element unstyled",
                    "Disables animations"
                ],
                "answer": "Limits style recalculations to the element and its descendants"
            },
            {
                "question": "How does the CSS `counter-reset` property work?",
                "options": [
                    "Initializes or resets a CSS counter to a specific value",
                    "Counts HTML elements",
                    "Creates a numbered list only",
                    "Resets browser counters"
                ],
                "answer": "Initializes or resets a CSS counter to a specific value"
            },
            {
                "question": "What is the benefit of using `display: contents;`?",
                "options": [
                    "Makes the element disappear visually but keeps its children in the DOM for styling",
                    "Removes the element and children",
                    "Displays elements as inline",
                    "Creates a block container"
                ],
                "answer": "Makes the element disappear visually but keeps its children in the DOM for styling"
            },
            {
                "question": "How do the CSS properties `max-height` and `min-height` interact?",
                "options": [
                    "`max-height` sets the upper limit, `min-height` sets the lower limit for element height",
                    "Both set fixed height",
                    "`min-height` overrides `max-height` always",
                    "Both are ignored by browsers"
                ],
                "answer": "`max-height` sets the upper limit, `min-height` sets the lower limit for element height"
            },
            {
                "question": "What does the `contain: strict;` property enforce?",
                "options": [
                    "Full containment of layout, style, paint, and size for an element",
                    "Only layout containment",
                    "Only paint containment",
                    "No containment"
                ],
                "answer": "Full containment of layout, style, paint, and size for an element"
            },
            {
                "question": "Explain the difference between `line-height` set in unitless number and with units.",
                "options": [
                    "Unitless is multiplied by font size and inherited as a multiplier; units are fixed lengths",
                    "Unitless is ignored, units are used",
                    "Both behave identically",
                    "Units override font size"
                ],
                "answer": "Unitless is multiplied by font size and inherited as a multiplier; units are fixed lengths"
            },
            {
                "question": "What is the difference between `minmax()` and `repeat()` in CSS Grid?",
                "options": [
                    "`minmax()` defines size range for a track; `repeat()` repeats a pattern of tracks",
                    "`repeat()` defines size range",
                    "Both are identical",
                    "`minmax()` repeats tracks"
                ],
                "answer": "`minmax()` defines size range for a track; `repeat()` repeats a pattern of tracks"
            }
        ]

    },
    javascript: {
        beginners: [
            {
                "question": "What is JavaScript?",
                "options": ["A database", "A programming language", "A web browser", "An image editor"],
                "answer": "A programming language"
            },
            {
                "question": "How do you declare a variable in JavaScript?",
                "options": ["let myVar;", "var myVar;", "const myVar;", "All of the above"],
                "answer": "All of the above"
            },
            {
                "question": "Which symbol is used for single-line comments in JavaScript?",
                "options": ["//", "/*", "#", "<!--"],
                "answer": "//"
            },
            {
                "question": "What does 'NaN' stand for?",
                "options": ["Not a Node", "Not a Name", "Not a Number", "Name as Null"],
                "answer": "Not a Number"
            },
            {
                "question": "What is the keyword to define a constant?",
                "options": ["let", "var", "const", "define"],
                "answer": "const"
            },
            {
                "question": "What does the typeof operator do?",
                "options": ["Defines a variable", "Checks data type", "Deletes an object", "Loops through array"],
                "answer": "Checks data type"
            },
            {
                "question": "How do you create a function in JavaScript?",
                "options": ["function = myFunc()", "func myFunc()", "function myFunc()", "create function myFunc()"],
                "answer": "function myFunc()"
            },
            {
                "question": "Which method adds a new element to the end of an array?",
                "options": ["add()", "push()", "append()", "insert()"],
                "answer": "push()"
            },
            {
                "question": "How can you write 'Hello World' in an alert box?",
                "options": ["alertBox('Hello World');", "msg('Hello World');", "alert('Hello World');", "msgBox('Hello World');"],
                "answer": "alert('Hello World');"
            },
            {
                "question": "Which symbol is used for strict equality?",
                "options": ["==", "===", "=", "!="],
                "answer": "==="
            },
            {
                "question": "How do you access the first element of an array?",
                "options": ["array.first()", "array[0]", "array(0)", "array{0}"],
                "answer": "array[0]"
            },
            {
                "question": "How do you start a for loop?",
                "options": ["for (i in range)", "loop(i=0;i<5;i++)", "for i=1 to 5", "for (let i = 0; i < 5; i++)"],
                "answer": "for (let i = 0; i < 5; i++)"
            },
            {
                "question": "Which operator is used to assign a value?",
                "options": ["==", "=", "===", "!="],
                "answer": "="
            },
            {
                "question": "What will the expression 5 + '5' return?",
                "options": ["10", "'55'", "undefined", "NaN"],
                "answer": "'55'"
            },
            {
                "question": "What is the default value of an uninitialized variable?",
                "options": ["null", "undefined", "0", "NaN"],
                "answer": "undefined"
            },
            {
                "question": "Which of the following is NOT a JavaScript data type?",
                "options": ["Boolean", "Undefined", "Float", "Object"],
                "answer": "Float"
            },
            {
                "question": "How do you comment multiple lines in JavaScript?",
                "options": ["// comment", "# comment", "<!-- comment -->", "/* comment */"],
                "answer": "/* comment */"
            },
            {
                "question": "Which of these is a valid JavaScript array?",
                "options": ["{1,2,3}", "(1,2,3)", "[1,2,3]", "<1,2,3>"],
                "answer": "[1,2,3]"
            },
            {
                "question": "Which method removes the last item of an array?",
                "options": ["pop()", "remove()", "delete()", "shift()"],
                "answer": "pop()"
            },
            {
                "question": "What will 'typeof null' return?",
                "options": ["null", "undefined", "object", "boolean"],
                "answer": "object"
            },
            {
                "question": "How do you check if two values are equal in value and type?",
                "options": ["==", "===", "=", "!="],
                "answer": "==="
            },
            {
                "question": "What does DOM stand for?",
                "options": ["Document Object Model", "Data Object Map", "Document Orientation Mode", "Dynamic Object Method"],
                "answer": "Document Object Model"
            },
            {
                "question": "How can you get an element by ID in JavaScript?",
                "options": ["getElementByName()", "getElement()", "document.getElementById()", "document.findById()"],
                "answer": "document.getElementById()"
            },
            {
                "question": "Which method can be used to convert a string to an integer?",
                "options": ["parseInt()", "toInteger()", "Number.parse()", "int()"],
                "answer": "parseInt()"
            },
            {
                "question": "What is a JavaScript object?",
                "options": ["A type of string", "A list of items", "A collection of key-value pairs", "An array of numbers"],
                "answer": "A collection of key-value pairs"
            },
            {
                "question": "Which of the following is a boolean value?",
                "options": ["0", "'false'", "true", "'0'"],
                "answer": "true"
            },
            {
                "question": "Which method adds an item to the beginning of an array?",
                "options": ["append()", "unshift()", "push()", "addFirst()"],
                "answer": "unshift()"
            },
            {
                "question": "What is the correct way to check if a variable is an array?",
                "options": ["typeof arr == 'array'", "arr.isArray()", "Array.isArray(arr)", "arr instanceof ArrayList"],
                "answer": "Array.isArray(arr)"
            },
            {
                "question": "What is the output of typeof []?",
                "options": ["object", "array", "list", "undefined"],
                "answer": "object"
            },
            {
                "question": "How do you convert a number to a string?",
                "options": ["String(123)", "123.toString()", "`123`", "All of the above"],
                "answer": "All of the above"
            },
            {
                "question": "Which method joins all elements of an array into a string?",
                "options": ["combine()", "concat()", "join()", "merge()"],
                "answer": "join()"
            },
            {
                "question": "What does the break statement do in JavaScript?",
                "options": ["Repeats a loop", "Exits the loop early", "Skips current iteration", "Ends the script"],
                "answer": "Exits the loop early"
            },
            {
                "question": "What is a callback function?",
                "options": ["A function that calls itself", "A function inside a class", "A function passed into another function", "An async function"],
                "answer": "A function passed into another function"
            },
            {
                "question": "Which operator represents logical AND?",
                "options": ["&&", "&", "AND", "||"],
                "answer": "&&"
            },
            {
                "question": "What value does a variable declared with let have before it’s assigned?",
                "options": ["null", "0", "undefined", "NaN"],
                "answer": "undefined"
            },
            {
                "question": "How do you declare a class in JavaScript?",
                "options": ["new class MyClass {}", "function class MyClass {}", "class MyClass {}", "define MyClass {}"],
                "answer": "class MyClass {}"
            },
            {
                "question": "What does the continue statement do in a loop?",
                "options": ["Ends the loop", "Skips to next iteration", "Restarts loop", "Pauses loop"],
                "answer": "Skips to next iteration"
            },
            {
                "question": "Which function runs a block of code after a delay?",
                "options": ["setDelay()", "wait()", "setTimeout()", "delay()"],
                "answer": "setTimeout()"
            },
            {
                "question": "What is the output of typeof null?",
                "options": ["null", "object", "undefined", "string"],
                "answer": "object"
            },
            {
                "question": "Which object is the root of everything in a web page?",
                "options": ["window", "document", "this", "screen"],
                "answer": "window"
            },
            {
                "question": "How do you write an arrow function?",
                "options": ["function => () {}", "() => {}", "function() => {}", "() -> {}",],
                "answer": "() => {}"
            },
            {
                "question": "Which keyword is used to handle errors?",
                "options": ["try", "catch", "throw", "All of the above"],
                "answer": "All of the above"
            },
            {
                "question": "What is a string?",
                "options": ["A number", "A boolean", "A sequence of characters", "A keyword"],
                "answer": "A sequence of characters"
            },
            {
                "question": "How do you check if a value is not equal in value or type?",
                "options": ["!=", "!==", "notEqual()", "<>"],
                "answer": "!=="
            },
            {
                "question": "How do you declare an object?",
                "options": ["let obj = [];", "let obj = {};", "let obj = ();", "let obj = <>;"],
                "answer": "let obj = {};"
            },
            {
                "question": "Which method is used to filter an array?",
                "options": ["map()", "filter()", "find()", "select()"],
                "answer": "filter()"
            },
            {
                "question": "Which method creates a new array by transforming each element?",
                "options": ["forEach()", "filter()", "map()", "reduce()"],
                "answer": "map()"
            },
            {
                "question": "What does JSON stand for?",
                "options": ["Java Source Object Notation", "JavaScript Object Notation", "Java Simple Object Name", "JavaScript Output Node"],
                "answer": "JavaScript Object Notation"
            },
            {
                "question": "Which method parses a JSON string into an object?",
                "options": ["JSON.stringify()", "JSON.parse()", "JSON.decode()", "JSON.read()"],
                "answer": "JSON.parse()"
            },
            {
                "question": "How do you convert an object into a JSON string?",
                "options": ["JSON.toString()", "JSON.stringify()", "JSON.encode()", "JSON.save()"],
                "answer": "JSON.stringify()"
            },
            {
                "question": "Which array method checks if at least one element passes a test?",
                "options": ["some()", "filter()", "map()", "findAll()"],
                "answer": "some()"
            },
            {
                "question": "Which array method checks if all elements pass a test?",
                "options": ["all()", "every()", "filter()", "map()"],
                "answer": "every()"
            },
            {
                "question": "What does the reduce() method do?",
                "options": ["Reduces an array’s size", "Executes a reducer function on each element", "Filters the array", "Sorts the array"],
                "answer": "Executes a reducer function on each element"
            },
            {
                "question": "How do you round a number to the nearest integer?",
                "options": ["Math.round()", "Math.floor()", "Math.ceil()", "Math.nearest()"],
                "answer": "Math.round()"
            },
            {
                "question": "What is the result of 10 % 3?",
                "options": ["3", "0", "1", "10"],
                "answer": "1"
            },
            {
                "question": "Which keyword is used to exit a function?",
                "options": ["break", "stop", "end", "return"],
                "answer": "return"
            },
            {
                "question": "How do you get the length of an array?",
                "options": ["length()", "array.length", "array.length()", "count(array)"],
                "answer": "array.length"
            },
            {
                "question": "Which of the following is a falsy value?",
                "options": ["0", "null", "undefined", "All of the above"],
                "answer": "All of the above"
            },
            {
                "question": "Which method is used to execute a function for each array element?",
                "options": ["map()", "filter()", "forEach()", "loop()"],
                "answer": "forEach()"
            },
            {
                "question": "What does === check in JavaScript?",
                "options": ["Only type", "Only value", "Both value and type", "Length of value"],
                "answer": "Both value and type"
            },
            {
                "question": "What does 'this' refer to in a regular function?",
                "options": ["The parent function", "Global object or object calling the function", "Always window", "Current file"],
                "answer": "Global object or object calling the function"
            },
            {
                "question": "What does 'this' refer to in an arrow function?",
                "options": ["The object that calls the function", "The global object", "It depends", "The lexical scope"],
                "answer": "The lexical scope"
            },
            {
                "question": "What is a promise in JavaScript?",
                "options": ["A type of function", "A way to write loops", "An object for asynchronous operations", "A callback replacement only"],
                "answer": "An object for asynchronous operations"
            },
            {
                "question": "Which of these is a JavaScript loop?",
                "options": ["if", "for", "switch", "catch"],
                "answer": "for"
            },
            {
                "question": "What keyword is used to define an asynchronous function?",
                "options": ["async", "await", "defer", "promise"],
                "answer": "async"
            },
            {
                "question": "Which keyword is used to wait for a promise to resolve?",
                "options": ["setTimeout", "wait", "await", "async"],
                "answer": "await"
            },
            {
                "question": "How do you declare a variable that won’t change?",
                "options": ["let", "var", "const", "final"],
                "answer": "const"
            },
            {
                "question": "Which operator is used for exponentiation?",
                "options": ["^", "**", "exp()", "pow"],
                "answer": "**"
            },
            {
                "question": "What is the output of '2' + 2?",
                "options": ["4", "22", "NaN", "undefined"],
                "answer": "22"
            },
            {
                "question": "What is the correct syntax for a ternary operator?",
                "options": ["if ? then : else", "x > 10 ? 'yes' : 'no'", "x ? y : z", "condition then ? else"],
                "answer": "x > 10 ? 'yes' : 'no'"
            },
            {
                "question": "Which value is returned when no return statement is used?",
                "options": ["null", "undefined", "NaN", "false"],
                "answer": "undefined"
            },
            {
                "question": "What is the correct way to check if a variable is undefined?",
                "options": ["var === null", "typeof var === 'undefined'", "var == false", "var = undefined"],
                "answer": "typeof var === 'undefined'"
            },
            {
                "question": "What happens if you try to use a variable before declaring it with let?",
                "options": ["undefined", "NaN", "ReferenceError", "null"],
                "answer": "ReferenceError"
            },
            {
                "question": "What does the splice() method do?",
                "options": ["Deletes an array", "Modifies an array by removing or replacing elements", "Splits a string", "Adds elements at the end"],
                "answer": "Modifies an array by removing or replacing elements"
            },
            {
                "question": "What is hoisting in JavaScript?",
                "options": ["Moving variables to bottom", "Automatic variable and function declaration lifting", "Async execution", "Loop optimization"],
                "answer": "Automatic variable and function declaration lifting"
            },
            {
                "question": "Which symbol is used for OR in JavaScript?",
                "options": ["&", "||", "&&", "|"],
                "answer": "||"
            },
            {
                "question": "What is the result of typeof undefined?",
                "options": ["undefined", "null", "object", "string"],
                "answer": "undefined"
            },
            {
                "question": "What is the use of the isNaN() function?",
                "options": ["To check for strings", "To check for null", "To check if a value is Not a Number", "To check for arrays"],
                "answer": "To check if a value is Not a Number"
            },
            {
                "question": "Which keyword is used to create a new object from a class?",
                "options": ["new", "create", "instance", "init"],
                "answer": "new"
            },
            {
                "question": "What is a constructor in JavaScript?",
                "options": ["A method to construct HTML", "A method called when an object is created", "A function that returns a string", "A loop for building objects"],
                "answer": "A method called when an object is created"
            },
            {
                "question": "Which built-in method returns the character at a specified index?",
                "options": ["slice()", "charAt()", "substring()", "charIndex()"],
                "answer": "charAt()"
            },
            {
                "question": "Which method can convert a string to lowercase?",
                "options": ["toLowerCase()", "lowercase()", "strToLower()", "minimize()"],
                "answer": "toLowerCase()"
            },
            {
                "question": "How do you remove whitespace from both ends of a string?",
                "options": ["trim()", "strip()", "slice()", "clean()"],
                "answer": "trim()"
            },
            {
                "question": "Which keyword is used to inherit a class?",
                "options": ["extends", "inherits", "super", "derive"],
                "answer": "extends"
            },
            {
                "question": "What is the purpose of the super() keyword?",
                "options": ["To call a parent class constructor", "To declare a superclass", "To inherit properties", "To close the function"],
                "answer": "To call a parent class constructor"
            },
            {
                "question": "What is an event in JavaScript?",
                "options": ["A CSS style", "An HTML tag", "An action that occurs in the browser", "A variable"],
                "answer": "An action that occurs in the browser"
            },
            {
                "question": "Which function is commonly used to handle events?",
                "options": ["addHandler()", "addEventListener()", "onTrigger()", "attachEvent()"],
                "answer": "addEventListener()"
            },
            {
                "question": "What does the querySelector() method do?",
                "options": ["Selects all elements", "Returns the first matching element", "Creates a new element", "Deletes an element"],
                "answer": "Returns the first matching element"
            },
            {
                "question": "Which of these is a valid way to create an array?",
                "options": ["let arr = array();", "let arr = [];", "let arr = {}", "let arr = <>;"],
                "answer": "let arr = [];"
            },
            {
                "question": "Which method is used to find the index of an item in an array?",
                "options": ["indexOf()", "find()", "search()", "position()"],
                "answer": "indexOf()"
            },
            {
                "question": "What is the purpose of the 'default' keyword in a switch statement?",
                "options": ["To end the switch", "To handle all unmatched cases", "To declare a default variable", "To break the loop"],
                "answer": "To handle all unmatched cases"
            },
            {
                "question": "Which of the following creates a new array without modifying the original?",
                "options": ["splice()", "slice()", "push()", "pop()"],
                "answer": "slice()"
            },
            {
                "question": "Which symbol is used to spread elements in JavaScript?",
                "options": ["...", "@", "*", "#"],
                "answer": "..."
            },
            {
                "question": "Which keyword skips the current loop iteration?",
                "options": ["break", "skip", "continue", "pass"],
                "answer": "continue"
            },
            {
                "question": "Which object represents the browser window?",
                "options": ["browser", "document", "screen", "window"],
                "answer": "window"
            },
            {
                "question": "How do you create a Date object?",
                "options": ["new Date()", "Date()", "create Date()", "make Date()"],
                "answer": "new Date()"
            },
            {
                "question": "What is the use of the Math.random() function?",
                "options": ["Returns a random integer", "Returns a random string", "Returns a random number between 0 and 1", "Returns a fixed number"],
                "answer": "Returns a random number between 0 and 1"
            },
            {
                "question": "Which property returns the number of milliseconds since 1970?",
                "options": ["getTime()", "now()", "Date.now()", "timestamp()"],
                "answer": "Date.now()"
            },
            {
                "question": "Which operator is used to combine conditions?",
                "options": ["+", "&", "&&", "!"],
                "answer": "&&"
            },
            {
                "question": "What will console.log(typeof []) output?",
                "options": ["array", "object", "list", "undefined"],
                "answer": "object"
            }
        ],
        intermediate: [
            {
                "question": "What will be the output of the following code?\nconsole.log(typeof NaN);",
                "options": [
                    "number",
                    "NaN",
                    "undefined",
                    "object"
                ],
                "answer": "number"
            },
            {
                "question": "Which method converts a JSON string into a JavaScript object?",
                "options": [
                    "JSON.parse()",
                    "JSON.stringify()",
                    "JSON.toObject()",
                    "JSON.convert()"
                ],
                "answer": "JSON.parse()"
            },
            {
                "question": "What is the difference between let and var in JavaScript?",
                "options": [
                    "let is block scoped; var is function scoped",
                    "var is block scoped; let is function scoped",
                    "Both are block scoped",
                    "Both are function scoped"
                ],
                "answer": "let is block scoped; var is function scoped"
            },
            {
                "question": "What will be the output of this code?\nconsole.log(0.1 + 0.2 === 0.3);",
                "options": [
                    "true",
                    "false",
                    "undefined",
                    "TypeError"
                ],
                "answer": "false"
            },
            {
                "question": "Which of the following methods is used to merge two or more arrays?",
                "options": [
                    "concat()",
                    "merge()",
                    "combine()",
                    "append()"
                ],
                "answer": "concat()"
            },
            {
                "question": "What will be the output of the following code?\nconsole.log([] + []);",
                "options": [
                    "\"\" (empty string)",
                    "\"[]\"",
                    "undefined",
                    "TypeError"
                ],
                "answer": "\"\" (empty string)"
            },
            {
                "question": "Which of these is NOT a valid way to declare a function in JavaScript?",
                "options": [
                    "function myFunc() {}",
                    "const myFunc = function() {}",
                    "let myFunc = () => {}",
                    "function: myFunc() {}"
                ],
                "answer": "function: myFunc() {}"
            },
            {
                "question": "What will the following code output?\nconsole.log(typeof null);",
                "options": [
                    "\"object\"",
                    "\"null\"",
                    "\"undefined\"",
                    "\"boolean\""
                ],
                "answer": "\"object\""
            },
            {
                "question": "Which keyword is used to handle exceptions in JavaScript?",
                "options": [
                    "try",
                    "catch",
                    "throw",
                    "final"
                ],
                "answer": "try"
            },
            {
                "question": "What is the purpose of the JavaScript 'bind' method?",
                "options": [
                    "To permanently set the 'this' context of a function",
                    "To call a function immediately",
                    "To create a new object",
                    "To clone an array"
                ],
                "answer": "To permanently set the 'this' context of a function"
            },
            {
                "question": "How can you create an object with no prototype in JavaScript?",
                "options": [
                    "Object.create(null)",
                    "{}",
                    "new Object()",
                    "Object.prototype = null"
                ],
                "answer": "Object.create(null)"
            },
            {
                "question": "What is the output of this code?\nconsole.log(typeof NaN === 'number');",
                "options": [
                    "true",
                    "false",
                    "undefined",
                    "TypeError"
                ],
                "answer": "true"
            },
            {
                "question": "Which operator is used to check both value and type equality in JavaScript?",
                "options": [
                    "===",
                    "==",
                    "=",
                    "!=="
                ],
                "answer": "==="
            },
            {
                "question": "What will the following code output?\nconsole.log('5' - 3);",
                "options": [
                    "2",
                    "53",
                    "NaN",
                    "TypeError"
                ],
                "answer": "2"
            },
            {
                "question": "Which method is used to add one or more elements to the end of an array?",
                "options": [
                    "push()",
                    "pop()",
                    "shift()",
                    "unshift()"
                ],
                "answer": "push()"
            },
            {
                "question": "What does the 'async' keyword before a function declaration signify?",
                "options": [
                    "The function returns a Promise",
                    "The function runs synchronously",
                    "The function cannot have await inside",
                    "The function is deprecated"
                ],
                "answer": "The function returns a Promise"
            },
            {
                "question": "What is the output of this code?\nconsole.log([] == false);",
                "options": [
                    "true",
                    "false",
                    "TypeError",
                    "undefined"
                ],
                "answer": "true"
            },
            {
                "question": "Which built-in method reverses the elements of an array?",
                "options": [
                    "reverse()",
                    "sort()",
                    "changeOrder()",
                    "invert()"
                ],
                "answer": "reverse()"
            },
            {
                "question": "What is the difference between '==' and '===' operators?",
                "options": [
                    "'==' compares value with type coercion, '===' compares value and type without coercion",
                    "'==' compares value and type, '===' compares only value",
                    "Both are the same",
                    "'===' is used only with strings"
                ],
                "answer": "'==' compares value with type coercion, '===' compares value and type without coercion"
            },
            {
                "question": "Which of the following is true about JavaScript closures?",
                "options": [
                    "A closure is a function having access to the parent scope even after the parent function has closed",
                    "Closures are a way to create private variables in JavaScript",
                    "Closures can help in data encapsulation",
                    "All of the above"
                ],
                "answer": "All of the above"
            },
            {
                "question": "What is the result of the following expression?\nconsole.log(typeof function() {});",
                "options": [
                    "\"function\"",
                    "\"object\"",
                    "\"undefined\"",
                    "\"method\""
                ],
                "answer": "\"function\""
            },
            {
                "question": "Which method would you use to stop event propagation in JavaScript?",
                "options": [
                    "event.stopPropagation()",
                    "event.preventDefault()",
                    "event.stopImmediatePropagation()",
                    "event.cancelBubble()"
                ],
                "answer": "event.stopPropagation()"
            },
            {
                "question": "What will be the output of this code?\nconsole.log([] == 0);",
                "options": [
                    "true",
                    "false",
                    "TypeError",
                    "undefined"
                ],
                "answer": "true"
            },
            {
                "question": "Which statement best describes the 'this' keyword in JavaScript?",
                "options": [
                    "'this' refers to the object that is executing the current function",
                    "'this' is always the global object",
                    "'this' refers to the parent function",
                    "'this' is undefined"
                ],
                "answer": "'this' refers to the object that is executing the current function"
            },
            {
                "question": "What will the following code output?\nconsole.log(typeof undefined);",
                "options": [
                    "\"undefined\"",
                    "\"object\"",
                    "\"null\"",
                    "\"void\""
                ],
                "answer": "\"undefined\""
            },
            {
                "question": "How do you create a shallow copy of an array in JavaScript?",
                "options": [
                    "Using slice() method",
                    "Using concat() method",
                    "Using spread operator (...)",
                    "All of the above"
                ],
                "answer": "All of the above"
            },
            {
                "question": "Which of the following is NOT a JavaScript data type?",
                "options": [
                    "Symbol",
                    "Boolean",
                    "Character",
                    "Undefined"
                ],
                "answer": "Character"
            },
            {
                "question": "What does the 'new' keyword do in JavaScript?",
                "options": [
                    "Creates a new object from a constructor function",
                    "Declares a new variable",
                    "Clones an existing object",
                    "Deletes an object"
                ],
                "answer": "Creates a new object from a constructor function"
            },
            {
                "question": "What will be the output of this code?\nconsole.log(typeof NaN === typeof Infinity);",
                "options": [
                    "true",
                    "false",
                    "TypeError",
                    "undefined"
                ],
                "answer": "true"
            },
            {
                "question": "Which method would you use to check if an array includes a certain element?",
                "options": [
                    "includes()",
                    "contains()",
                    "has()",
                    "indexOf()"
                ],
                "answer": "includes()"
            },
            {
                "question": "What does the 'void' operator do in JavaScript?",
                "options": [
                    "Evaluates an expression and returns undefined",
                    "Deletes an object property",
                    "Stops code execution",
                    "Pauses the script"
                ],
                "answer": "Evaluates an expression and returns undefined"
            },
            {
                "question": "How do you declare a constant in JavaScript?",
                "options": [
                    "Using the const keyword",
                    "Using the let keyword",
                    "Using the var keyword",
                    "Using the constant keyword"
                ],
                "answer": "Using the const keyword"
            },
            {
                "question": "Which of the following is NOT a valid way to clone an object in JavaScript?",
                "options": [
                    "Object.assign()",
                    "Spread operator {...}",
                    "JSON.parse(JSON.stringify())",
                    "Using the clone() method"
                ],
                "answer": "Using the clone() method"
            },
            {
                "question": "What does the 'await' keyword do in JavaScript?",
                "options": [
                    "Pauses the async function until the Promise is resolved",
                    "Stops the whole script execution",
                    "Returns a Promise",
                    "Declares an asynchronous function"
                ],
                "answer": "Pauses the async function until the Promise is resolved"
            },
            {
                "question": "What will this code output?\nconsole.log(typeof Array.isArray);",
                "options": [
                    "\"function\"",
                    "\"object\"",
                    "\"undefined\"",
                    "\"boolean\""
                ],
                "answer": "\"function\""
            },
            {
                "question": "Which operator can be used to assign a default value if a variable is null or undefined?",
                "options": [
                    "?? (nullish coalescing operator)",
                    "|| (logical OR operator)",
                    "&& (logical AND operator)",
                    "? (ternary operator)"
                ],
                "answer": "?? (nullish coalescing operator)"
            },
            {
                "question": "What is the purpose of the JavaScript 'Symbol' type?",
                "options": [
                    "To create unique identifiers",
                    "To store numbers",
                    "To create strings",
                    "To hold boolean values"
                ],
                "answer": "To create unique identifiers"
            },
            {
                "question": "What will the following code output?\nconsole.log(!!'false');",
                "options": [
                    "true",
                    "false",
                    "undefined",
                    "TypeError"
                ],
                "answer": "true"
            },
            {
                "question": "What is the output of this code?\nconsole.log(+'5' + 3);",
                "options": [
                    "8",
                    "'53'",
                    "NaN",
                    "TypeError"
                ],
                "answer": "8"
            },
            {
                "question": "Which of the following is true about JavaScript generators?",
                "options": [
                    "They allow functions to be paused and resumed",
                    "They return promises",
                    "They are synchronous functions",
                    "They cannot yield values"
                ],
                "answer": "They allow functions to be paused and resumed"
            },

            {
                "question": "What is the result of the expression `typeof NaN`?",
                "options": [
                    "\"number\"",
                    "\"NaN\"",
                    "\"undefined\"",
                    "\"object\""
                ],
                "answer": "\"number\""
            },
            {
                "question": "Which of these array methods does NOT modify the original array?",
                "options": [
                    "map()",
                    "push()",
                    "pop()",
                    "shift()"
                ],
                "answer": "map()"
            },
            {
                "question": "Which keyword is used to declare a variable that cannot be reassigned?",
                "options": [
                    "const",
                    "let",
                    "var",
                    "static"
                ],
                "answer": "const"
            },
            {
                "question": "What is the output of this code?\n`console.log(0 || 'hello');`",
                "options": [
                    "'hello'",
                    "0",
                    "false",
                    "undefined"
                ],
                "answer": "'hello'"
            },
            {
                "question": "How can you create a promise in JavaScript?",
                "options": [
                    "Using the Promise constructor",
                    "Using async functions only",
                    "By calling new Async()",
                    "Using setTimeout"
                ],
                "answer": "Using the Promise constructor"
            },
            {
                "question": "Which method can be used to flatten a nested array one level deep?",
                "options": [
                    "flat()",
                    "flatten()",
                    "reduce()",
                    "concat()"
                ],
                "answer": "flat()"
            },
            {
                "question": "What does the following code output?\n`console.log(typeof Symbol('id'));`",
                "options": [
                    "\"symbol\"",
                    "\"string\"",
                    "\"object\"",
                    "\"undefined\""
                ],
                "answer": "\"symbol\""
            },
            {
                "question": "What will the code output?\n`console.log(typeof null);`",
                "options": [
                    "\"object\"",
                    "\"null\"",
                    "\"undefined\"",
                    "\"boolean\""
                ],
                "answer": "\"object\""
            },
            {
                "question": "What is a 'hoisting' behavior in JavaScript?",
                "options": [
                    "Variables and function declarations are moved to the top of their scope before execution",
                    "Variables are deleted after execution",
                    "Functions are only available after being defined",
                    "Variables cannot be redeclared"
                ],
                "answer": "Variables and function declarations are moved to the top of their scope before execution"
            },
            {
                "question": "What does the following expression evaluate to?\n`console.log(typeof undefined === 'undefined');`",
                "options": [
                    "true",
                    "false",
                    "undefined",
                    "TypeError"
                ],
                "answer": "true"
            },
            {
                "question": "Which of the following correctly defines an arrow function?",
                "options": [
                    "const add = (a, b) => a + b;",
                    "function add(a, b) { return a + b; }",
                    "const add = function(a, b) { return a + b; }",
                    "let add = new Function('a', 'b', 'return a + b');"
                ],
                "answer": "const add = (a, b) => a + b;"
            },
            {
                "question": "Which array method returns the first element that satisfies the provided testing function?",
                "options": [
                    "find()",
                    "filter()",
                    "map()",
                    "reduce()"
                ],
                "answer": "find()"
            },
            {
                "question": "What is the output of the following code?\n`console.log(!!null);`",
                "options": [
                    "false",
                    "true",
                    "null",
                    "undefined"
                ],
                "answer": "false"
            },
            {
                "question": "What is the use of the 'prototype' property in JavaScript?",
                "options": [
                    "To add properties and methods to all instances of a constructor",
                    "To create private variables",
                    "To declare a constant value",
                    "To create a new object"
                ],
                "answer": "To add properties and methods to all instances of a constructor"
            },
            {
                "question": "Which of these statements is true about JavaScript event loop?",
                "options": [
                    "It processes the call stack and the message queue asynchronously",
                    "It is single-threaded and synchronous",
                    "It executes code line by line without interruption",
                    "It only works with promises"
                ],
                "answer": "It processes the call stack and the message queue asynchronously"
            },
            {
                "question": "Which of the following is NOT a way to create an object in JavaScript?",
                "options": [
                    "Using Object.create()",
                    "Using object literals",
                    "Using new Object()",
                    "Using the clone() method"
                ],
                "answer": "Using the clone() method"
            },
            {
                "question": "What is the difference between 'null' and 'undefined' in JavaScript?",
                "options": [
                    "'null' is an assigned value indicating no value; 'undefined' means a variable has been declared but not assigned",
                    "'undefined' is an assigned value; 'null' means a variable has been declared but not assigned",
                    "Both mean the same thing",
                    "'null' is a type, 'undefined' is not"
                ],
                "answer": "'null' is an assigned value indicating no value; 'undefined' means a variable has been declared but not assigned"
            },
            {
                "question": "What will this code output?\n`console.log('Hello' instanceof String);`",
                "options": [
                    "false",
                    "true",
                    "TypeError",
                    "undefined"
                ],
                "answer": "false"
            },
            {
                "question": "Which operator can be used to destructure properties from an object?",
                "options": [
                    "{} (curly braces)",
                    "[] (square brackets)",
                    "() (parentheses)",
                    "<> (angle brackets)"
                ],
                "answer": "{} (curly braces)"
            },
            {
                "question": "What does the 'typeof' operator return for an array?",
                "options": [
                    "\"object\"",
                    "\"array\"",
                    "\"undefined\"",
                    "\"list\""
                ],
                "answer": "\"object\""
            },
            {
                "question": "Which method converts a JavaScript object to a JSON string?",
                "options": [
                    "JSON.stringify()",
                    "JSON.parse()",
                    "toString()",
                    "convert()"
                ],
                "answer": "JSON.stringify()"
            },
            {
                "question": "What is a Promise in JavaScript?",
                "options": [
                    "An object representing the eventual completion or failure of an asynchronous operation",
                    "A synchronous function",
                    "A special type of variable",
                    "A way to store data locally"
                ],
                "answer": "An object representing the eventual completion or failure of an asynchronous operation"
            },
            {
                "question": "What will this code output?\n`console.log(typeof (typeof 123));`",
                "options": [
                    "\"string\"",
                    "\"number\"",
                    "\"undefined\"",
                    "\"object\""
                ],
                "answer": "\"string\""
            },
            {
                "question": "Which statement is true about the JavaScript 'let' keyword?",
                "options": [
                    "Variables declared with let are block scoped",
                    "Variables declared with let are function scoped",
                    "let variables can be redeclared in the same scope",
                    "let is the same as var"
                ],
                "answer": "Variables declared with let are block scoped"
            },
            {
                "question": "What is the purpose of the 'finally' block in a try-catch statement?",
                "options": [
                    "Code inside finally runs regardless of whether an error occurred or not",
                    "It runs only if an error occurs",
                    "It runs only if no error occurs",
                    "It handles the error"
                ],
                "answer": "Code inside finally runs regardless of whether an error occurred or not"
            },
            {
                "question": "What is the output of this code?\n`console.log([] + {});`",
                "options": [
                    "\"[object Object]\"",
                    "\"\"",
                    "\"undefined\"",
                    "\"[object]\""
                ],
                "answer": "\"[object Object]\""
            },
            {
                "question": "Which operator is used to access properties of an object?",
                "options": [
                    ". (dot operator)",
                    ": (colon)",
                    ", (comma)",
                    "- (dash)"
                ],
                "answer": ". (dot operator)"
            },
            {
                "question": "What does the spread operator (...) do in JavaScript?",
                "options": [
                    "Expands iterable objects into individual elements",
                    "Combines two strings",
                    "Creates a new object",
                    "Declares a variable"
                ],
                "answer": "Expands iterable objects into individual elements"
            },
            {
                "question": "What will this code output?\n`console.log(typeof function*() {});`",
                "options": [
                    "\"function\"",
                    "\"generator\"",
                    "\"object\"",
                    "\"undefined\""
                ],
                "answer": "\"function\""
            },
            {
                "question": "What does the JavaScript 'Map' object store?",
                "options": [
                    "Key-value pairs where keys can be any type",
                    "Only string keys and values",
                    "Only numeric keys",
                    "Unique values without keys"
                ],
                "answer": "Key-value pairs where keys can be any type"
            },
            {
                "question": "How do you stop the execution of a loop early in JavaScript?",
                "options": [
                    "Using the 'break' statement",
                    "Using 'continue' statement",
                    "Using 'stop' statement",
                    "Using 'exit' statement"
                ],
                "answer": "Using the 'break' statement"
            },
            {
                "question": "What is a 'callback' function in JavaScript?",
                "options": [
                    "A function passed into another function as an argument to be executed later",
                    "A function that returns a promise",
                    "A function that throws an error",
                    "A function that is immediately executed"
                ],
                "answer": "A function passed into another function as an argument to be executed later"
            },
            {
                "question": "Which statement is true about the 'typeof' operator?",
                "options": [
                    "It returns a string indicating the type of the operand",
                    "It returns a number representing the type",
                    "It throws an error for undefined variables",
                    "It returns the constructor name"
                ],
                "answer": "It returns a string indicating the type of the operand"
            },
            {
                "question": "Which symbol is used to denote a template literal in JavaScript?",
                "options": [
                    "` (backticks)",
                    "' (single quotes)",
                    "\" (double quotes)",
                    "~ (tilde)"
                ],
                "answer": "` (backticks)"
            },
            {
                "question": "What will this code output?\n`console.log(typeof Promise);`",
                "options": [
                    "\"function\"",
                    "\"object\"",
                    "\"undefined\"",
                    "\"promise\""
                ],
                "answer": "\"function\""
            },
            {
                "question": "How do you create a private variable in JavaScript using closures?",
                "options": [
                    "By defining a variable inside a function and exposing functions that access it",
                    "Using the 'private' keyword",
                    "Declaring variables with 'const'",
                    "Using a class"
                ],
                "answer": "By defining a variable inside a function and exposing functions that access it"
            },
            {
                "question": "What is the difference between 'call' and 'apply' methods?",
                "options": [
                    "'call' accepts arguments separately, 'apply' accepts arguments as an array",
                    "'call' returns a new function, 'apply' executes immediately",
                    "They are identical",
                    "'apply' can only be used on arrays"
                ],
                "answer": "'call' accepts arguments separately, 'apply' accepts arguments as an array"
            },
            {
                "question": "What is the output of the following code?\n`console.log(!!undefined);`",
                "options": [
                    "false",
                    "true",
                    "undefined",
                    "TypeError"
                ],
                "answer": "false"
            },
            {
                "question": "Which of the following is used to define a class in JavaScript?",
                "options": [
                    "class",
                    "function",
                    "object",
                    "struct"
                ],
                "answer": "class"
            },
            {
                "question": "Which method adds an element to the beginning of an array?",
                "options": [
                    "unshift()",
                    "push()",
                    "shift()",
                    "pop()"
                ],
                "answer": "unshift()"
            },
            {
                "question": "What does the following code output?\n`console.log(typeof null === 'object');`",
                "options": [
                    "true",
                    "false",
                    "TypeError",
                    "undefined"
                ],
                "answer": "true"
            },

            {
                "question": "What will this code output?\n`console.log(1 + '2' + 3);`",
                "options": [
                    "'123'",
                    "6",
                    "'33'",
                    "NaN"
                ],
                "answer": "'123'"
            },
            {
                "question": "What is the output of this code?\n`console.log(typeof (function() {}));`",
                "options": [
                    "\"function\"",
                    "\"object\"",
                    "\"undefined\"",
                    "\"method\""
                ],
                "answer": "\"function\""
            },
            {
                "question": "How do you add an element at the end of an array in JavaScript?",
                "options": [
                    "Using push() method",
                    "Using pop() method",
                    "Using shift() method",
                    "Using unshift() method"
                ],
                "answer": "Using push() method"
            },
            {
                "question": "Which of the following is true about JavaScript's 'async/await'?",
                "options": [
                    "It allows writing asynchronous code in a synchronous style",
                    "It makes code synchronous",
                    "It stops all execution until a task completes",
                    "It creates new threads"
                ],
                "answer": "It allows writing asynchronous code in a synchronous style"
            },
            {
                "question": "What does the 'instanceof' operator do?",
                "options": [
                    "Checks if an object is an instance of a specific class or constructor",
                    "Checks the data type of a variable",
                    "Creates an instance of an object",
                    "Checks if a variable is undefined"
                ],
                "answer": "Checks if an object is an instance of a specific class or constructor"
            },
            {
                "question": "What will this code output?\n`console.log([...'abc']);`",
                "options": [
                    "['a', 'b', 'c']",
                    "'abc'",
                    "[abc]",
                    "Error"
                ],
                "answer": "['a', 'b', 'c']"
            },
            {
                "question": "How can you detect if a variable is an array in JavaScript?",
                "options": [
                    "Array.isArray(variable)",
                    "typeof variable === 'array'",
                    "variable instanceof Object",
                    "variable.constructor === Array"
                ],
                "answer": "Array.isArray(variable)"
            },
            {
                "question": "What is the output of this code?\n`console.log(Boolean(''));`",
                "options": [
                    "false",
                    "true",
                    "undefined",
                    "TypeError"
                ],
                "answer": "false"
            },
            {
                "question": "What will this expression return?\n`[1, 2, 3].reduce((a, b) => a + b, 0);`",
                "options": [
                    "6",
                    "[1, 2, 3]",
                    "123",
                    "NaN"
                ],
                "answer": "6"
            },
            {
                "question": "What is the use of the 'delete' operator in JavaScript?",
                "options": [
                    "Removes a property from an object",
                    "Deletes a variable",
                    "Deletes a function",
                    "Clears an array"
                ],
                "answer": "Removes a property from an object"
            },
            {
                "question": "What will this code output?\n`console.log('5' === 5);`",
                "options": [
                    "false",
                    "true",
                    "TypeError",
                    "undefined"
                ],
                "answer": "false"
            },
            {
                "question": "Which method can be used to merge two or more arrays?",
                "options": [
                    "concat()",
                    "merge()",
                    "push()",
                    "append()"
                ],
                "answer": "concat()"
            },
            {
                "question": "What does the 'finally' block in a Promise do?",
                "options": [
                    "Executes code after the Promise is settled, regardless of outcome",
                    "Handles errors",
                    "Only runs on success",
                    "Only runs on failure"
                ],
                "answer": "Executes code after the Promise is settled, regardless of outcome"
            },
            {
                "question": "Which of these are falsy values in JavaScript?",
                "options": [
                    "0, '', null, undefined, NaN, false",
                    "'0', 'false', []",
                    "1, 'true', {}",
                    "All values are truthy"
                ],
                "answer": "0, '', null, undefined, NaN, false"
            },
            {
                "question": "What does 'use strict' do in JavaScript?",
                "options": [
                    "Enables strict mode which catches common coding errors",
                    "Enables faster execution",
                    "Disables errors",
                    "Allows using deprecated features"
                ],
                "answer": "Enables strict mode which catches common coding errors"
            },
            {
                "question": "What will the following output?\n`console.log(typeof NaN);`",
                "options": [
                    "\"number\"",
                    "\"NaN\"",
                    "\"undefined\"",
                    "\"object\""
                ],
                "answer": "\"number\""
            },
            {
                "question": "Which method converts a JSON string into a JavaScript object?",
                "options": [
                    "JSON.parse()",
                    "JSON.stringify()",
                    "toJSON()",
                    "parseJSON()"
                ],
                "answer": "JSON.parse()"
            },
            {
                "question": "What is the output of this code?\n`console.log([] == false);`",
                "options": [
                    "true",
                    "false",
                    "TypeError",
                    "undefined"
                ],
                "answer": "true"
            },
            {
                "question": "Which symbol is used to denote a private class field in JavaScript?",
                "options": [
                    "#",
                    "@",
                    "$",
                    "_"
                ],
                "answer": "#"
            },
            {
                "question": "What does the 'typeof' operator return for a function?",
                "options": [
                    "\"function\"",
                    "\"object\"",
                    "\"undefined\"",
                    "\"method\""
                ],
                "answer": "\"function\""
            },
            {
                "question": "What is the difference between == and === in JavaScript?",
                "options": [
                    "== compares values with type coercion; === compares values without type coercion",
                    "They are identical",
                    "=== allows type coercion; == does not",
                    "Both compare only values"
                ],
                "answer": "== compares values with type coercion; === compares values without type coercion"
            }
        ],
        advanced: [
            {
                "question": "What is the primary difference between 'var', 'let', and 'const' in JavaScript?",
                "options": [
                    "'var' is function scoped; 'let' and 'const' are block scoped",
                    "'var' and 'let' are block scoped; 'const' is function scoped",
                    "All are block scoped but differ in mutability",
                    "'const' allows reassignment, 'let' and 'var' do not"
                ],
                "answer": "'var' is function scoped; 'let' and 'const' are block scoped"
            },
            {
                "question": "What will the following code output?\n`console.log((function(){ return typeof arguments; })());`",
                "options": [
                    "\"object\"",
                    "\"arguments\"",
                    "\"array\"",
                    "\"undefined\""
                ],
                "answer": "\"object\""
            },
            {
                "question": "In JavaScript, what does the 'bind()' method do?",
                "options": [
                    "Creates a new function with 'this' bound to a specific object",
                    "Immediately calls the function with a given context",
                    "Binds an event listener",
                    "Copies all properties of one object to another"
                ],
                "answer": "Creates a new function with 'this' bound to a specific object"
            },
            {
                "question": "What is the difference between a shallow copy and a deep copy of an object?",
                "options": [
                    "A shallow copy copies object references; a deep copy copies all nested objects",
                    "A deep copy copies references only; a shallow copy copies everything",
                    "Shallow copy duplicates objects; deep copy duplicates functions",
                    "No difference, both are the same"
                ],
                "answer": "A shallow copy copies object references; a deep copy copies all nested objects"
            },
            {
                "question": "Which of the following is true about JavaScript generators?",
                "options": [
                    "Generators can pause and resume their execution using 'yield'",
                    "Generators execute synchronously without pausing",
                    "Generators can only be used for asynchronous operations",
                    "Generators create new threads"
                ],
                "answer": "Generators can pause and resume their execution using 'yield'"
            },
            {
                "question": "What will the following code output?\n`console.log([] + []);`",
                "options": [
                    "\"\" (empty string)",
                    "\"undefined\"",
                    "\"[object Object][object Object]\"",
                    "\"null\""
                ],
                "answer": "\"\" (empty string)"
            },
            {
                "question": "How does the event delegation pattern improve performance?",
                "options": [
                    "By attaching a single event listener to a parent instead of many listeners to child elements",
                    "By stopping event propagation",
                    "By debouncing all events",
                    "By cloning DOM elements"
                ],
                "answer": "By attaching a single event listener to a parent instead of many listeners to child elements"
            },
            {
                "question": "What is the main use of the 'Proxy' object in JavaScript?",
                "options": [
                    "To define custom behavior for fundamental operations (e.g., property lookup, assignment)",
                    "To create immutable objects",
                    "To prevent access to object properties",
                    "To optimize performance"
                ],
                "answer": "To define custom behavior for fundamental operations (e.g., property lookup, assignment)"
            },
            {
                "question": "What does the 'await' keyword do inside an async function?",
                "options": [
                    "Pauses the execution until the awaited Promise resolves or rejects",
                    "Immediately returns a Promise",
                    "Throws an error if the Promise rejects",
                    "Blocks the entire JavaScript thread"
                ],
                "answer": "Pauses the execution until the awaited Promise resolves or rejects"
            },
            {
                "question": "What is the output of this code?\n`console.log(typeof NaN === 'number');`",
                "options": [
                    "true",
                    "false",
                    "TypeError",
                    "undefined"
                ],
                "answer": "true"
            },
            {
                "question": "How does JavaScript's event loop handle asynchronous callbacks?",
                "options": [
                    "By processing the call stack, then the task queue in a FIFO order",
                    "By running callbacks immediately",
                    "By using multiple threads to process callbacks",
                    "By ignoring asynchronous callbacks"
                ],
                "answer": "By processing the call stack, then the task queue in a FIFO order"
            },
            {
                "question": "What will be logged by this code?\n`let a = [1,2,3]; let b = a; b.push(4); console.log(a);`",
                "options": [
                    "[1,2,3,4]",
                    "[1,2,3]",
                    "[4]",
                    "Error"
                ],
                "answer": "[1,2,3,4]"
            },
            {
                "question": "What is a Symbol in JavaScript?",
                "options": [
                    "A unique and immutable primitive value often used as object keys",
                    "A string alias",
                    "A data type representing numbers",
                    "A deprecated feature"
                ],
                "answer": "A unique and immutable primitive value often used as object keys"
            },
            {
                "question": "Which of the following is NOT true about JavaScript classes?",
                "options": [
                    "Classes are syntactic sugar over JavaScript prototypes",
                    "Classes support inheritance",
                    "Classes have block scope",
                    "Classes can be hoisted"
                ],
                "answer": "Classes can be hoisted"
            },
            {
                "question": "What does the 'new' keyword do in JavaScript?",
                "options": [
                    "Creates a new object and sets the prototype",
                    "Calls a function immediately",
                    "Deletes an object",
                    "Binds a function to an object"
                ],
                "answer": "Creates a new object and sets the prototype"
            },
            {
                "question": "What will the following code output?\n`console.log(typeof (async function() {}));`",
                "options": [
                    "\"function\"",
                    "\"async\"",
                    "\"object\"",
                    "\"undefined\""
                ],
                "answer": "\"function\""
            },
            {
                "question": "How do you create an immutable object in JavaScript?",
                "options": [
                    "Using Object.freeze()",
                    "Using const keyword",
                    "Using Object.seal()",
                    "Using Proxy"
                ],
                "answer": "Using Object.freeze()"
            },
            {
                "question": "What is the output of the following code?\n`console.log([] == ![]);`",
                "options": [
                    "true",
                    "false",
                    "TypeError",
                    "undefined"
                ],
                "answer": "true"
            },
            {
                "question": "What is tail call optimization in JavaScript?",
                "options": [
                    "Optimizing recursive function calls that are in tail position to avoid stack overflow",
                    "Optimizing function calls with many parameters",
                    "Optimizing synchronous code",
                    "A way to parallelize code execution"
                ],
                "answer": "Optimizing recursive function calls that are in tail position to avoid stack overflow"
            },
            {
                "question": "Which of the following best describes the difference between microtasks and macrotasks?",
                "options": [
                    "Microtasks have higher priority and are executed before macrotasks in the event loop",
                    "Macrotasks have higher priority than microtasks",
                    "They are the same",
                    "Microtasks run in a separate thread"
                ],
                "answer": "Microtasks have higher priority and are executed before macrotasks in the event loop"
            },

            {
                "question": "What will this code output?\n`console.log(typeof (class {}));`",
                "options": [
                    "\"function\"",
                    "\"class\"",
                    "\"object\"",
                    "\"undefined\""
                ],
                "answer": "\"function\""
            },
            {
                "question": "What does the 'void' operator do in JavaScript?",
                "options": [
                    "Evaluates an expression and returns undefined",
                    "Stops function execution",
                    "Returns the value of an expression",
                    "Deletes a variable"
                ],
                "answer": "Evaluates an expression and returns undefined"
            },
            {
                "question": "What will the following code output?\n`console.log(typeof (null));`",
                "options": [
                    "\"object\"",
                    "\"null\"",
                    "\"undefined\"",
                    "\"boolean\""
                ],
                "answer": "\"object\""
            },
            {
                "question": "What is the difference between 'setTimeout' and 'setImmediate' in Node.js?",
                "options": [
                    "'setTimeout' schedules after a delay, 'setImmediate' executes after I/O events",
                    "'setTimeout' executes immediately, 'setImmediate' after a delay",
                    "They are identical",
                    "'setImmediate' is only available in browsers"
                ],
                "answer": "'setTimeout' schedules after a delay, 'setImmediate' executes after I/O events"
            },
            {
                "question": "What will this code output?\n`console.log(0.1 + 0.2 === 0.3);`",
                "options": [
                    "false",
                    "true",
                    "TypeError",
                    "undefined"
                ],
                "answer": "false"
            },
            {
                "question": "What does the 'Reflect' API provide in JavaScript?",
                "options": [
                    "Methods for interceptable JavaScript operations",
                    "Utility methods for arrays",
                    "DOM manipulation tools",
                    "Event handling"
                ],
                "answer": "Methods for interceptable JavaScript operations"
            },
            {
                "question": "What is the use of the 'WeakMap' in JavaScript?",
                "options": [
                    "Map where keys are weakly referenced and can be garbage collected",
                    "Map with immutable keys",
                    "Map that stores only string keys",
                    "A synonym for Map"
                ],
                "answer": "Map where keys are weakly referenced and can be garbage collected"
            },
            {
                "question": "What is the output of the following code?\n`console.log(typeof (async () => {}));`",
                "options": [
                    "\"function\"",
                    "\"async\"",
                    "\"object\"",
                    "\"undefined\""
                ],
                "answer": "\"function\""
            },
            {
                "question": "Which of the following is true about JavaScript module imports?",
                "options": [
                    "Imports are statically analyzed and hoisted",
                    "Imports happen dynamically at runtime",
                    "Imports can only be default exports",
                    "Modules are not supported natively in browsers"
                ],
                "answer": "Imports are statically analyzed and hoisted"
            },
            {
                "question": "What does the 'optional chaining' operator (?.) do?",
                "options": [
                    "Allows safe access to deeply nested properties without errors",
                    "Calls a function only if it exists",
                    "Checks if a variable is null",
                    "Throws an error on undefined properties"
                ],
                "answer": "Allows safe access to deeply nested properties without errors"
            },
            {
                "question": "What is the result of this code?\n`console.log(typeof Symbol());`",
                "options": [
                    "\"symbol\"",
                    "\"string\"",
                    "\"object\"",
                    "\"undefined\""
                ],
                "answer": "\"symbol\""
            },
            {
                "question": "How can you cancel a running Promise in JavaScript?",
                "options": [
                    "Promises cannot be directly cancelled; alternative methods must be used",
                    "By calling promise.cancel()",
                    "By throwing an error inside the Promise",
                    "Using the cancel keyword"
                ],
                "answer": "Promises cannot be directly cancelled; alternative methods must be used"
            },
            {
                "question": "What is the output of the following?\n`console.log(typeof NaN);`",
                "options": [
                    "\"number\"",
                    "\"NaN\"",
                    "\"undefined\"",
                    "\"object\""
                ],
                "answer": "\"number\""
            },
            {
                "question": "Which of the following statements about 'this' in arrow functions is correct?",
                "options": [
                    "'this' is lexically bound to the enclosing scope",
                    "'this' is dynamic and depends on how the function is called",
                    "'this' refers to the global object",
                    "Arrow functions do not have a 'this'"
                ],
                "answer": "'this' is lexically bound to the enclosing scope"
            },
            {
                "question": "What happens if a function does not explicitly return a value?",
                "options": [
                    "It returns undefined",
                    "It returns null",
                    "It returns an empty string",
                    "It causes an error"
                ],
                "answer": "It returns undefined"
            },
            {
                "question": "What is the output of this code?\n`console.log(typeof (function*() {}));`",
                "options": [
                    "\"function\"",
                    "\"generator\"",
                    "\"object\"",
                    "\"undefined\""
                ],
                "answer": "\"function\""
            },
            {
                "question": "What is the main difference between 'Object.freeze()' and 'Object.seal()'?",
                "options": [
                    "'freeze' prevents adding, removing, or modifying properties; 'seal' only prevents adding or removing properties",
                    "'seal' makes object immutable; 'freeze' allows modifications",
                    "They are synonyms",
                    "'seal' deletes properties; 'freeze' clones objects"
                ],
                "answer": "'freeze' prevents adding, removing, or modifying properties; 'seal' only prevents adding or removing properties"
            },
            {
                "question": "Which of the following statements is true about JavaScript event bubbling?",
                "options": [
                    "Events propagate from the innermost element to the outer elements",
                    "Events propagate from the outermost element to the innermost elements",
                    "Events propagate randomly",
                    "Events only trigger on the target element"
                ],
                "answer": "Events propagate from the innermost element to the outer elements"
            },
            {
                "question": "What does the 'Function.prototype.call()' method do?",
                "options": [
                    "Calls a function with a given 'this' value and arguments provided individually",
                    "Calls a function with 'this' bound to the global object",
                    "Creates a new function with bound arguments",
                    "Schedules a function call"
                ],
                "answer": "Calls a function with a given 'this' value and arguments provided individually"
            },
            {
                "question": "What is a 'closure' in JavaScript?",
                "options": [
                    "A function that remembers its lexical scope even when executed outside of it",
                    "A private variable",
                    "A global function",
                    "An immediately invoked function"
                ],
                "answer": "A function that remembers its lexical scope even when executed outside of it"
            },
            {
                "question": "What is the output of the following?\n`console.log([] == 0);`",
                "options": [
                    "true",
                    "false",
                    "TypeError",
                    "undefined"
                ],
                "answer": "true"
            },
            {
                "question": "What is the difference between 'for...in' and 'for...of' loops?",
                "options": [
                    "'for...in' iterates over property names; 'for...of' iterates over iterable values",
                    "'for...in' iterates over arrays; 'for...of' iterates over objects",
                    "They are identical",
                    "'for...of' iterates over property names; 'for...in' iterates over values"
                ],
                "answer": "'for...in' iterates over property names; 'for...of' iterates over iterable values"
            },
            {
                "question": "Which of these methods allows chaining multiple promises?",
                "options": [
                    "then()",
                    "catch()",
                    "finally()",
                    "all()"
                ],
                "answer": "then()"
            },
            {
                "question": "What does the 'async' keyword before a function declaration signify?",
                "options": [
                    "The function returns a Promise and can use 'await' inside",
                    "The function runs synchronously",
                    "The function is deprecated",
                    "The function is a generator"
                ],
                "answer": "The function returns a Promise and can use 'await' inside"
            },
            {
                "question": "What will be logged by the following code?\n`console.log(({}).toString());`",
                "options": [
                    "\"[object Object]\"",
                    "\"object\"",
                    "\"[object]\"",
                    "\"undefined\""
                ],
                "answer": "\"[object Object]\""
            },
            {
                "question": "What does the 'new.target' property indicate inside a function?",
                "options": [
                    "If the function was called using 'new' keyword",
                    "The constructor name",
                    "The global object",
                    "The function arguments"
                ],
                "answer": "If the function was called using 'new' keyword"
            },
            {
                "question": "What will the following code output?\n`console.log(typeof Promise.resolve());`",
                "options": [
                    "\"object\"",
                    "\"promise\"",
                    "\"function\"",
                    "\"undefined\""
                ],
                "answer": "\"object\""
            },
            {
                "question": "Which method is used to merge two or more arrays in JavaScript?",
                "options": [
                    "concat()",
                    "push()",
                    "merge()",
                    "append()"
                ],
                "answer": "concat()"
            },
            {
                "question": "What does the '??' (nullish coalescing) operator do?",
                "options": [
                    "Returns right-hand operand if left-hand is null or undefined",
                    "Returns right-hand operand if left-hand is falsy",
                    "Performs a logical AND",
                    "Checks if two operands are equal"
                ],
                "answer": "Returns right-hand operand if left-hand is null or undefined"
            },
            {
                "question": "What is the output of this code?\n`console.log(typeof NaN === 'number');`",
                "options": [
                    "true",
                    "false",
                    "TypeError",
                    "undefined"
                ],
                "answer": "true"
            },
            {
                "question": "Which of these is a correct way to create a new object without a prototype?",
                "options": [
                    "Object.create(null)",
                    "{}",
                    "new Object()",
                    "Object.prototype"
                ],
                "answer": "Object.create(null)"
            },
            {
                "question": "What is the purpose of the 'super' keyword in JavaScript classes?",
                "options": [
                    "To call methods on the parent class",
                    "To refer to the current instance",
                    "To create a new class",
                    "To delete a property"
                ],
                "answer": "To call methods on the parent class"
            },
            {
                "question": "How can you create a private field in a JavaScript class?",
                "options": [
                    "Using the '#' prefix before the field name",
                    "Using the 'private' keyword",
                    "Using closures",
                    "JavaScript does not support private fields"
                ],
                "answer": "Using the '#' prefix before the field name"
            },
            {
                "question": "What will this code output?\n`console.log(typeof (function () {}.bind(null)));`",
                "options": [
                    "\"function\"",
                    "\"object\"",
                    "\"undefined\"",
                    "\"null\""
                ],
                "answer": "\"function\""
            },
            {
                "question": "What happens when you try to access a property that does not exist on an object?",
                "options": [
                    "Returns undefined",
                    "Throws an error",
                    "Returns null",
                    "Returns NaN"
                ],
                "answer": "Returns undefined"
            },
            {
                "question": "Which of the following methods can be used to copy properties from one object to another?",
                "options": [
                    "Object.assign()",
                    "Object.create()",
                    "Object.freeze()",
                    "Object.defineProperty()"
                ],
                "answer": "Object.assign()"
            },
            {
                "question": "What will be logged by this code?\n`console.log([] == false);`",
                "options": [
                    "true",
                    "false",
                    "TypeError",
                    "undefined"
                ],
                "answer": "true"
            },
            {
                "question": "What does the 'setInterval' function do?",
                "options": [
                    "Executes a function repeatedly at specified intervals",
                    "Executes a function once after a delay",
                    "Cancels a timeout",
                    "Creates a promise"
                ],
                "answer": "Executes a function repeatedly at specified intervals"
            },
            {
                "question": "What will the following code output?\n`console.log(typeof (new Date()));`",
                "options": [
                    "\"object\"",
                    "\"date\"",
                    "\"function\"",
                    "\"undefined\""
                ],
                "answer": "\"object\""
            },
            {
                "question": "What is the main feature of the 'Map' object in JavaScript?",
                "options": [
                    "Stores key-value pairs with keys of any type",
                    "Stores only string keys",
                    "Stores unique values only",
                    "Stores data in order of insertion"
                ],
                "answer": "Stores key-value pairs with keys of any type"
            },
            {
                "question": "How can you prevent an object from being extended with new properties?",
                "options": [
                    "Using Object.preventExtensions()",
                    "Using Object.freeze()",
                    "Using Object.seal()",
                    "Using Object.lock()"
                ],
                "answer": "Using Object.preventExtensions()"
            },
            {
                "question": "What does the 'finally' block do in a try-catch statement?",
                "options": [
                    "Executes code after try and catch, regardless of outcome",
                    "Catches exceptions thrown in try",
                    "Handles errors",
                    "Stops execution"
                ],
                "answer": "Executes code after try and catch, regardless of outcome"
            },
            {
                "question": "What will this output?\n`console.log(0 || \"Hello\");`",
                "options": [
                    "\"Hello\"",
                    "0",
                    "false",
                    "null"
                ],
                "answer": "\"Hello\""
            },
            {
                "question": "Which method would you use to convert a JSON string into a JavaScript object?",
                "options": [
                    "JSON.parse()",
                    "JSON.stringify()",
                    "JSON.convert()",
                    "JSON.toObject()"
                ],
                "answer": "JSON.parse()"
            },
            {
                "question": "What does the 'Symbol.iterator' property do?",
                "options": [
                    "Defines the default iterator for an object",
                    "Defines a unique symbol",
                    "Converts a symbol to string",
                    "Deletes the iterator"
                ],
                "answer": "Defines the default iterator for an object"
            },
            {
                "question": "What is the output of this code?\n`console.log(typeof undefined === 'undefined');`",
                "options": [
                    "true",
                    "false",
                    "TypeError",
                    "undefined"
                ],
                "answer": "true"
            },
            {
                "question": "What is the main use of the 'setTimeout' function?",
                "options": [
                    "Execute code once after a specified delay",
                    "Execute code repeatedly at intervals",
                    "Cancel an ongoing operation",
                    "Create a new thread"
                ],
                "answer": "Execute code once after a specified delay"
            },
            {
                "question": "Which of these correctly describes 'hoisting' in JavaScript?",
                "options": [
                    "Variable and function declarations are moved to the top of their scope before execution",
                    "Code execution is paused until variables are initialized",
                    "Functions run before variables are declared",
                    "Only variables declared with 'var' are accessible"
                ],
                "answer": "Variable and function declarations are moved to the top of their scope before execution"
            },
            {
                "question": "What will the following expression evaluate to?\n`[] + {}`",
                "options": [
                    "\"[object Object]\"",
                    "\"\"",
                    "\"[object]\"",
                    "NaN"
                ],
                "answer": "\"[object Object]\""
            },
            {
                "question": "Which of the following is NOT a primitive data type in JavaScript?",
                "options": [
                    "Object",
                    "String",
                    "Boolean",
                    "Symbol"
                ],
                "answer": "Object"
            },
            {
                "question": "How do you check if a variable is an array?",
                "options": [
                    "Array.isArray()",
                    "typeof variable === 'array'",
                    "variable instanceof Array",
                    "Both Array.isArray() and instanceof Array"
                ],
                "answer": "Both Array.isArray() and instanceof Array"
            },
            {
                "question": "What is the output of the following?\n`console.log(typeof null);`",
                "options": [
                    "\"object\"",
                    "\"null\"",
                    "\"undefined\"",
                    "\"boolean\""
                ],
                "answer": "\"object\""
            },
            {
                "question": "What will be the output of this code?\n`console.log(!!'false');`",
                "options": [
                    "true",
                    "false",
                    "TypeError",
                    "undefined"
                ],
                "answer": "true"
            },
            {
                "question": "Which of these is a valid way to define a generator function?",
                "options": [
                    "function* gen() {}",
                    "function gen*() {}",
                    "generator function gen() {}",
                    "function gen() yield {}"
                ],
                "answer": "function* gen() {}"
            },
            {
                "question": "What is the output of this code?\n`console.log(Object.is(NaN, NaN));`",
                "options": [
                    "true",
                    "false",
                    "TypeError",
                    "undefined"
                ],
                "answer": "true"
            },
            {
                "question": "What is the output of the following?\n`console.log([] === []);`",
                "options": [
                    "false",
                    "true",
                    "TypeError",
                    "undefined"
                ],
                "answer": "false"
            },
            {
                "question": "What is the role of the 'yield' keyword in a generator function?",
                "options": [
                    "Pause and resume a generator function",
                    "Return a value and exit the function",
                    "Throw an error",
                    "Call another function"
                ],
                "answer": "Pause and resume a generator function"
            },
            {
                "question": "Which method allows you to define new properties or modify existing ones on an object?",
                "options": [
                    "Object.defineProperty()",
                    "Object.create()",
                    "Object.assign()",
                    "Object.freeze()"
                ],
                "answer": "Object.defineProperty()"
            },
            {
                "question": "What will this code output?\n`console.log(typeof (async function() {}));`",
                "options": [
                    "\"function\"",
                    "\"async\"",
                    "\"object\"",
                    "\"undefined\""
                ],
                "answer": "\"function\""
            },
            {
                "question": "Which of these methods returns a new array with all elements that pass a test?",
                "options": [
                    "filter()",
                    "map()",
                    "reduce()",
                    "forEach()"
                ],
                "answer": "filter()"
            },
            {
                "question": "What is the difference between '==' and '===' in JavaScript?",
                "options": [
                    "'==' checks equality with type coercion; '===' checks equality without type coercion",
                    "'==' is stricter than '==='",
                    "'===' coerces types before comparing",
                    "They are the same"
                ],
                "answer": "'==' checks equality with type coercion; '===' checks equality without type coercion"
            },
            {
                "question": "What will be the output?\n`console.log(typeof function() {});`",
                "options": [
                    "\"function\"",
                    "\"object\"",
                    "\"undefined\"",
                    "\"null\""
                ],
                "answer": "\"function\""
            },
            {
                "question": "How does JavaScript handle variable declarations with 'var' inside functions?",
                "options": [
                    "Variables are hoisted to the top of their function scope",
                    "Variables are block scoped",
                    "Variables are global",
                    "Variables are not hoisted"
                ],
                "answer": "Variables are hoisted to the top of their function scope"
            },
            {
                "question": "What is the output of this code?\n`console.log(typeof (() => {}));`",
                "options": [
                    "\"function\"",
                    "\"object\"",
                    "\"undefined\"",
                    "\"arrow function\""
                ],
                "answer": "\"function\""
            },
            {
                "question": "What does the 'new' keyword do when used with a function?",
                "options": [
                    "Creates a new object and sets 'this' to it inside the function",
                    "Calls the function normally",
                    "Binds the function to the global object",
                    "Deletes the function"
                ],
                "answer": "Creates a new object and sets 'this' to it inside the function"
            },
            {
                "question": "What does the spread operator (...) do in JavaScript?",
                "options": [
                    "Expands elements of an iterable into individual elements",
                    "Combines multiple objects into one",
                    "Creates a new function",
                    "Stops execution"
                ],
                "answer": "Expands elements of an iterable into individual elements"
            },
            {
                "question": "Which of these is true about JavaScript’s event loop?",
                "options": [
                    "It manages the execution of synchronous and asynchronous code",
                    "It executes code in parallel",
                    "It blocks UI rendering",
                    "It handles CSS styles"
                ],
                "answer": "It manages the execution of synchronous and asynchronous code"
            },
            {
                "question": "What will this code log?\n`console.log(typeof undefined === 'undefined');`",
                "options": [
                    "true",
                    "false",
                    "TypeError",
                    "undefined"
                ],
                "answer": "true"
            },
            {
                "question": "What does the method 'Array.prototype.reduce()' do?",
                "options": [
                    "Reduces an array to a single value by executing a reducer function on each element",
                    "Creates a new array with modified elements",
                    "Filters elements based on a test",
                    "Iterates through the array"
                ],
                "answer": "Reduces an array to a single value by executing a reducer function on each element"
            },
            {
                "question": "What is the result of this expression?\n`typeof null`",
                "options": [
                    "\"object\"",
                    "\"null\"",
                    "\"undefined\"",
                    "\"boolean\""
                ],
                "answer": "\"object\""
            },
            {
                "question": "Which symbol is used to create a private class field?",
                "options": [
                    "#",
                    "@",
                    "$",
                    "_"
                ],
                "answer": "#"
            },
            {
                "question": "What is the output of this code?\n`console.log(!!0);`",
                "options": [
                    "false",
                    "true",
                    "0",
                    "undefined"
                ],
                "answer": "false"
            },
            {
                "question": "What is the primary use of the 'bind()' method?",
                "options": [
                    "Creates a new function with a bound 'this' value",
                    "Calls a function immediately",
                    "Changes a function’s return value",
                    "Deletes a function"
                ],
                "answer": "Creates a new function with a bound 'this' value"
            },
            {
                "question": "Which of the following is NOT a way to create an object in JavaScript?",
                "options": [
                    "Using 'new Object()'",
                    "Using an object literal {}",
                    "Using Object.create()",
                    "Using the 'object()' function"
                ],
                "answer": "Using the 'object()' function"
            },
            {
                "question": "What will the following code output?\n`console.log(typeof NaN);`",
                "options": [
                    "\"number\"",
                    "\"NaN\"",
                    "\"undefined\"",
                    "\"object\""
                ],
                "answer": "\"number\""
            },
            {
                "question": "What will this log?\n`console.log(0.1 + 0.2 === 0.3);`",
                "options": [
                    "false",
                    "true",
                    "TypeError",
                    "undefined"
                ],
                "answer": "false"
            },
            {
                "question": "What does the 'delete' operator do?",
                "options": [
                    "Removes a property from an object",
                    "Deletes a variable",
                    "Deletes a function",
                    "Clears the console"
                ],
                "answer": "Removes a property from an object"
            },
        ]
    },
    jsModuleSystems: {
        beginners: [
            {
                "question": "Which keyword is used to import modules in ES6?",
                "options": [
                    "import",
                    "require",
                    "include",
                    "load"
                ],
                "answer": "import"
            },
            {
                "question": "How do you import a module in CommonJS?",
                "options": [
                    "const module = require('module');",
                    "import module from 'module';",
                    "include('module');",
                    "load('module');"
                ],
                "answer": "const module = require('module');"
            },
            {
                "question": "How do you export a function in CommonJS?",
                "options": [
                    "module.exports = functionName;",
                    "export function functionName() {}",
                    "exports = functionName;",
                    "export default functionName;"
                ],
                "answer": "module.exports = functionName;"
            },
            {
                "question": "How do you export a function in ES6?",
                "options": [
                    "export function functionName() {}",
                    "module.exports = functionName;",
                    "exports.functionName = functionName;",
                    "require('functionName');"
                ],
                "answer": "export function functionName() {}"
            },
            {
                "question": "Which of the following is the default export in ES6?",
                "options": [
                    "export default functionName;",
                    "module.exports = functionName;",
                    "exports.functionName = functionName;",
                    "export functionName;"
                ],
                "answer": "export default functionName;"
            },
            {
                "question": "Which statement correctly imports a default export in ES6?",
                "options": [
                    "import myFunc from './module';",
                    "const myFunc = require('./module');",
                    "import { myFunc } from './module';",
                    "export myFunc from './module';"
                ],
                "answer": "import myFunc from './module';"
            },
            {
                "question": "Which method loads modules synchronously?",
                "options": [
                    "CommonJS require()",
                    "ES6 import",
                    "Both import and require",
                    "Neither import nor require"
                ],
                "answer": "CommonJS require()"
            },
            {
                "question": "Which of the following is NOT a valid way to export in CommonJS?",
                "options": [
                    "exports.myFunc = myFunc;",
                    "module.exports = myFunc;",
                    "export default myFunc;",
                    "exports = myFunc;"
                ],
                "answer": "export default myFunc;"
            },
            {
                "question": "How can you export multiple items in ES6?",
                "options": [
                    "export { var1, var2 };",
                    "module.exports = { var1, var2 };",
                    "exports.var1 = var1; exports.var2 = var2;",
                    "export default { var1, var2 };"
                ],
                "answer": "export { var1, var2 };"
            },
            {
                "question": "Which extension usually indicates an ES6 module file?",
                "options": [
                    ".mjs",
                    ".js",
                    ".cjs",
                    ".json"
                ],
                "answer": ".mjs"
            },
            {
                "question": "How do you import a specific named export in ES6?",
                "options": [
                    "import { myFunc } from './module';",
                    "const myFunc = require('./module');",
                    "import myFunc from './module';",
                    "require('myFunc');"
                ],
                "answer": "import { myFunc } from './module';"
            },
            {
                "question": "Which syntax is used for exporting a constant in ES6?",
                "options": [
                    "export const PI = 3.14;",
                    "module.exports.PI = 3.14;",
                    "exports.PI = 3.14;",
                    "const PI = 3.14; export PI;"
                ],
                "answer": "export const PI = 3.14;"
            },
            {
                "question": "How do you export an object with multiple properties in CommonJS?",
                "options": [
                    "module.exports = { a: 1, b: 2 };",
                    "export { a, b };",
                    "exports.a = 1; exports.b = 2;",
                    "Both A and C"
                ],
                "answer": "Both A and C"
            },
            {
                "question": "Which is the correct way to import an entire module as an object in ES6?",
                "options": [
                    "import * as utils from './utils';",
                    "const utils = require('./utils');",
                    "export * from './utils';",
                    "include('./utils');"
                ],
                "answer": "import * as utils from './utils';"
            },
            {
                "question": "How do you export a default value in ES6?",
                "options": [
                    "export default value;",
                    "module.exports = value;",
                    "exports.default = value;",
                    "export value;"
                ],
                "answer": "export default value;"
            },
            {
                "question": "Which is a correct way to import a default export and a named export together in ES6?",
                "options": [
                    "import defaultExport, { namedExport } from './module';",
                    "import { defaultExport, namedExport } from './module';",
                    "const { defaultExport, namedExport } = require('./module');",
                    "export defaultExport, namedExport;"
                ],
                "answer": "import defaultExport, { namedExport } from './module';"
            },
            {
                "question": "Which of the following is true about CommonJS modules?",
                "options": [
                    "Modules are loaded synchronously",
                    "Modules are loaded asynchronously",
                    "Modules use 'import' and 'export' keywords",
                    "Modules only run in browsers"
                ],
                "answer": "Modules are loaded synchronously"
            },
            {
                "question": "Can ES6 modules be loaded directly in browsers?",
                "options": [
                    "Yes, using <script type=\"module\"> tag",
                    "No, only CommonJS can",
                    "Only after transpiling with Babel",
                    "No, ES6 modules are Node.js only"
                ],
                "answer": "Yes, using <script type=\"module\"> tag"
            },
            {
                "question": "What happens if you import the same ES6 module twice?",
                "options": [
                    "It executes only once and caches the result",
                    "It executes twice",
                    "It throws an error",
                    "It reloads from disk each time"
                ],
                "answer": "It executes only once and caches the result"
            },
            {
                "question": "In CommonJS, what is 'exports'?",
                "options": [
                    "An object to attach exported properties",
                    "The same as 'module.exports'",
                    "A function",
                    "A global variable"
                ],
                "answer": "An object to attach exported properties"
            },
            {
                "question": "What is the recommended way to export a single function in CommonJS?",
                "options": [
                    "module.exports = functionName;",
                    "exports.functionName = functionName;",
                    "export default functionName;",
                    "export functionName;"
                ],
                "answer": "module.exports = functionName;"
            },
            {
                "question": "Which of the following is NOT true about ES6 module imports?",
                "options": [
                    "Imports are read-only bindings",
                    "You can reassign an imported variable",
                    "You can rename imports",
                    "Imports support destructuring"
                ],
                "answer": "You can reassign an imported variable"
            },
            {
                "question": "How do you rename an imported variable in ES6?",
                "options": [
                    "import { originalName as aliasName } from './module';",
                    "const aliasName = require('./module').originalName;",
                    "import originalName from './module' as aliasName;",
                    "export { originalName as aliasName };"
                ],
                "answer": "import { originalName as aliasName } from './module';"
            },
            {
                "question": "What happens if you assign a new value to 'exports' directly in CommonJS?",
                "options": [
                    "It breaks the link to 'module.exports'",
                    "It updates 'module.exports' automatically",
                    "It throws an error",
                    "It works like normal"
                ],
                "answer": "It breaks the link to 'module.exports'"
            },
            {
                "question": "How do you dynamically import an ES6 module?",
                "options": [
                    "import('./module').then(module => {});",
                    "const mod = require('./module');",
                    "import module from './module';",
                    "load('./module');"
                ],
                "answer": "import('./module').then(module => {});"
            },
            {
                "question": "Which syntax re-exports all named exports from another module in ES6?",
                "options": [
                    "export * from './module';",
                    "import * from './module';",
                    "module.exports = require('./module');",
                    "export default from './module';"
                ],
                "answer": "export * from './module';"
            },
            {
                "question": "What is the difference between 'exports' and 'module.exports' in CommonJS?",
                "options": [
                    "'exports' is a shortcut to 'module.exports' but assigning to 'exports' breaks the reference",
                    "They are exactly the same",
                    "'module.exports' is read-only",
                    "'exports' can only export functions"
                ],
                "answer": "'exports' is a shortcut to 'module.exports' but assigning to 'exports' breaks the reference"
            },
            {
                "question": "Which keyword is used to export multiple named values in ES6?",
                "options": [
                    "export",
                    "module.exports",
                    "exports",
                    "require"
                ],
                "answer": "export"
            },
            {
                "question": "Which of these is NOT a valid way to import a module in ES6?",
                "options": [
                    "import module from './module';",
                    "import { functionName } from './module';",
                    "const module = require('./module');",
                    "import * as module from './module';"
                ],
                "answer": "const module = require('./module');"
            },
            {
                "question": "Which module system is primarily used in Node.js by default?",
                "options": [
                    "CommonJS",
                    "ES6 modules",
                    "AMD",
                    "UMD"
                ],
                "answer": "CommonJS"
            },
            {
                "question": "How do you export a named constant in ES6?",
                "options": [
                    "export const NAME = 'value';",
                    "module.exports.NAME = 'value';",
                    "exports.NAME = 'value';",
                    "const NAME = 'value'; export NAME;"
                ],
                "answer": "export const NAME = 'value';"
            },
            {
                "question": "Is 'require' a function or keyword in CommonJS?",
                "options": [
                    "Function",
                    "Keyword",
                    "Operator",
                    "Variable"
                ],
                "answer": "Function"
            },
            {
                "question": "How do you export a default anonymous function in ES6?",
                "options": [
                    "export default function() {}",
                    "module.exports = function() {}",
                    "exports.default = function() {}",
                    "export function() {}"
                ],
                "answer": "export default function() {}"
            },
            {
                "question": "Which statement about ES6 modules is correct?",
                "options": [
                    "They support static analysis for better optimization",
                    "They are always synchronous",
                    "They are only used in browsers",
                    "They do not support named exports"
                ],
                "answer": "They support static analysis for better optimization"
            },
            {
                "question": "What is true about ES6 module variables?",
                "options": [
                    "They are live bindings to exported values",
                    "They are copies of the values",
                    "They cannot be used outside the module",
                    "They can be reassigned by imports"
                ],
                "answer": "They are live bindings to exported values"
            },
            {
                "question": "How do you import the default export from a CommonJS module using ES6 import syntax?",
                "options": [
                    "import pkg from 'commonjs-package';",
                    "const pkg = require('commonjs-package');",
                    "import { default as pkg } from 'commonjs-package';",
                    "import * as pkg from 'commonjs-package';"
                ],
                "answer": "import pkg from 'commonjs-package';"
            },
            {
                "question": "Can you mix CommonJS 'require' and ES6 'import' in the same file?",
                "options": [
                    "Yes, but it needs care due to differences in module handling",
                    "No, it's not allowed",
                    "Yes, without any issues",
                    "Only in browsers"
                ],
                "answer": "Yes, but it needs care due to differences in module handling"
            },
            {
                "question": "How do you export a function and variable together in CommonJS?",
                "options": [
                    "module.exports = { funcName, varName };",
                    "export { funcName, varName };",
                    "exports.funcName = funcName; exports.varName = varName;",
                    "Both A and C"
                ],
                "answer": "Both A and C"
            },
            {
                "question": "Which of the following will NOT work as an import in CommonJS?",
                "options": [
                    "import myModule from './myModule';",
                    "const myModule = require('./myModule');",
                    "const { something } = require('./myModule');",
                    "const myModule = require('./myModule.js');"
                ],
                "answer": "import myModule from './myModule';"
            },
            {
                "question": "How do you specify a module as ES6 module in Node.js without .mjs extension?",
                "options": [
                    "Add \"type\": \"module\" in package.json",
                    "Use .cjs extension",
                    "Add 'use strict' at the top",
                    "Set environment variable NODE_MODULE=es6"
                ],
                "answer": "Add \"type\": \"module\" in package.json"
            },
            {
                "question": "Which statement is true about ES6 default exports?",
                "options": [
                    "A module can have only one default export",
                    "A module can have multiple default exports",
                    "Default exports must be named",
                    "You cannot import default exports"
                ],
                "answer": "A module can have only one default export"
            }
        ],
        intermediate: [
            {
                "question": "What is the primary difference between ES6 modules and CommonJS modules?",
                "options": [
                    "ES6 modules are statically analyzed, CommonJS are dynamic",
                    "CommonJS modules are statically analyzed, ES6 are dynamic",
                    "Both are dynamically analyzed",
                    "Both are statically analyzed"
                ],
                "answer": "ES6 modules are statically analyzed, CommonJS are dynamic"
            },
            {
                "question": "Which of these statements about ES6 module hoisting is true?",
                "options": [
                    "Imports are hoisted and available before execution",
                    "Imports are not hoisted",
                    "Exports are hoisted but imports are not",
                    "Neither imports nor exports are hoisted"
                ],
                "answer": "Imports are hoisted and available before execution"
            },
            {
                "question": "In CommonJS, what happens if you call require on the same module multiple times?",
                "options": [
                    "The module is executed only once and cached",
                    "The module is executed every time",
                    "It throws an error",
                    "It reloads the module but doesn’t execute"
                ],
                "answer": "The module is executed only once and cached"
            },
            {
                "question": "Which feature allows ES6 modules to have circular dependencies handled safely?",
                "options": [
                    "Live bindings",
                    "Static analysis",
                    "Synchronous loading",
                    "Lazy evaluation"
                ],
                "answer": "Live bindings"
            },
            {
                "question": "How can you export multiple variables and functions as named exports in ES6?",
                "options": [
                    "export { var1, func1 };",
                    "module.exports = { var1, func1 };",
                    "exports.var1 = var1; exports.func1 = func1;",
                    "export default { var1, func1 };"
                ],
                "answer": "export { var1, func1 };"
            },
            {
                "question": "What is the role of 'module.exports' in CommonJS?",
                "options": [
                    "Defines the object returned by require()",
                    "Imports a module",
                    "Deletes a module",
                    "Caches the module"
                ],
                "answer": "Defines the object returned by require()"
            },
            {
                "question": "Which syntax correctly imports a named export and renames it in ES6?",
                "options": [
                    "import { originalName as newName } from './module';",
                    "const { originalName: newName } = require('./module');",
                    "import originalName newName from './module';",
                    "export { originalName as newName };"
                ],
                "answer": "import { originalName as newName } from './module';"
            },
            {
                "question": "How can you dynamically import an ES6 module?",
                "options": [
                    "import('./module.js').then(module => {});",
                    "const module = require('./module.js');",
                    "import module from './module.js';",
                    "require.dynamic('./module.js');"
                ],
                "answer": "import('./module.js').then(module => {});"
            },
            {
                "question": "What will happen if you modify an exported object in ES6?",
                "options": [
                    "Changes reflect in all imports due to live bindings",
                    "Imports get copies, so changes don’t reflect",
                    "It throws an error",
                    "Objects cannot be exported"
                ],
                "answer": "Changes reflect in all imports due to live bindings"
            },
            {
                "question": "Which of these is NOT a valid way to export a default function in ES6?",
                "options": [
                    "export default function foo() {}",
                    "export function foo() {}",
                    "export default () => {}",
                    "const foo = () => {}; export default foo;"
                ],
                "answer": "export function foo() {}"
            },
            {
                "question": "How do you export a named function and a default function in the same ES6 module?",
                "options": [
                    "export function namedFunc() {}; export default function defaultFunc() {};",
                    "module.exports.namedFunc = namedFunc; module.exports.default = defaultFunc;",
                    "exports.namedFunc = namedFunc; exports.default = defaultFunc;",
                    "export default namedFunc; export default defaultFunc;"
                ],
                "answer": "export function namedFunc() {}; export default function defaultFunc() {};"
            },
            {
                "question": "Which method can you use to check if a module has been cached in CommonJS?",
                "options": [
                    "require.cache",
                    "module.cache",
                    "exports.cache",
                    "require.modules"
                ],
                "answer": "require.cache"
            },
            {
                "question": "Which of the following describes how ES6 modules handle side effects?",
                "options": [
                    "Modules execute their code once when imported",
                    "Modules execute every time they are imported",
                    "Modules do not execute code automatically",
                    "Modules cannot have side effects"
                ],
                "answer": "Modules execute their code once when imported"
            },
            {
                "question": "What is the behavior of 'import' statements in ES6 regarding asynchronous loading?",
                "options": [
                    "'import' is static and synchronous at parse time",
                    "'import' is asynchronous by default",
                    "'import' executes only after an event",
                    "'import' requires callbacks"
                ],
                "answer": "'import' is static and synchronous at parse time"
            },
            {
                "question": "What does the 'export * from' syntax do in ES6 modules?",
                "options": [
                    "Re-exports all named exports from another module",
                    "Imports all exports from a module",
                    "Exports default export only",
                    "Imports and runs the module code"
                ],
                "answer": "Re-exports all named exports from another module"
            },
            {
                "question": "Why does assigning directly to 'exports' in CommonJS sometimes break module exports?",
                "options": [
                    "Because 'exports' is a reference to 'module.exports' and reassigning breaks the reference",
                    "'exports' cannot be reassigned",
                    "'module.exports' is read-only",
                    "'exports' and 'module.exports' are completely independent"
                ],
                "answer": "Because 'exports' is a reference to 'module.exports' and reassigning breaks the reference"
            },
            {
                "question": "How can you import a CommonJS module default export in ES6 using Babel transpilation?",
                "options": [
                    "import pkg from 'pkg';",
                    "import { default as pkg } from 'pkg';",
                    "const pkg = require('pkg');",
                    "import * as pkg from 'pkg';"
                ],
                "answer": "import pkg from 'pkg';"
            },
            {
                "question": "What is the syntax for named exports in CommonJS?",
                "options": [
                    "exports.name = value;",
                    "export const name = value;",
                    "module.export.name = value;",
                    "export default name;"
                ],
                "answer": "exports.name = value;"
            },
            {
                "question": "What does the '.mjs' file extension signify?",
                "options": [
                    "An ES6 module file",
                    "A CommonJS module file",
                    "A minimized JavaScript file",
                    "A markdown file"
                ],
                "answer": "An ES6 module file"
            },
            {
                "question": "Which is true about the difference between ES6 'import' and CommonJS 'require'?",
                "options": [
                    "'import' is static and hoisted, 'require' is dynamic",
                    "'require' is static, 'import' is dynamic",
                    "Both are static",
                    "Both are dynamic"
                ],
                "answer": "'import' is static and hoisted, 'require' is dynamic"
            },
            {
                "question": "What is a live binding in ES6 modules?",
                "options": [
                    "An import that reflects changes to the exported variable",
                    "A constant imported value",
                    "A copy of the exported variable",
                    "An alias for the exported variable"
                ],
                "answer": "An import that reflects changes to the exported variable"
            },
            {
                "question": "Can you use ES6 import/export in Node.js without flags or config?",
                "options": [
                    "Only if you set \"type\": \"module\" in package.json or use .mjs extension",
                    "Yes, by default",
                    "No, never",
                    "Only in older versions of Node.js"
                ],
                "answer": "Only if you set \"type\": \"module\" in package.json or use .mjs extension"
            },
            {
                "question": "What is tree shaking in the context of ES6 modules?",
                "options": [
                    "Removing unused exports during build",
                    "Loading modules dynamically",
                    "Caching modules",
                    "Importing only default exports"
                ],
                "answer": "Removing unused exports during build"
            },
            {
                "question": "Which of the following is a valid way to export an object with methods in CommonJS?",
                "options": [
                    "module.exports = { foo: () => {}, bar: () => {} };",
                    "exports = { foo: () => {}, bar: () => {} };",
                    "export default { foo() {}, bar() {} };",
                    "export { foo, bar };"
                ],
                "answer": "module.exports = { foo: () => {}, bar: () => {} };"
            },
            {
                "question": "What is the default export in ES6?",
                "options": [
                    "The main exported value or function without a name",
                    "All named exports in an object",
                    "There is no default export",
                    "The module itself"
                ],
                "answer": "The main exported value or function without a name"
            },
            {
                "question": "How can you import only specific named exports in ES6?",
                "options": [
                    "import { named1, named2 } from './module';",
                    "const { named1, named2 } = require('./module');",
                    "import * from './module';",
                    "import defaultExport from './module';"
                ],
                "answer": "import { named1, named2 } from './module';"
            },
            {
                "question": "What does 'export default' allow you to do?",
                "options": [
                    "Export a single value as the default export",
                    "Export multiple named values",
                    "Import modules",
                    "Require modules"
                ],
                "answer": "Export a single value as the default export"
            },
            {
                "question": "How do ES6 modules handle circular dependencies differently from CommonJS?",
                "options": [
                    "ES6 uses live bindings, CommonJS uses cached exports",
                    "CommonJS supports circular dependencies, ES6 doesn’t",
                    "ES6 modules cannot have circular dependencies",
                    "Both handle them the same way"
                ],
                "answer": "ES6 uses live bindings, CommonJS uses cached exports"
            },
            {
                "question": "Which statement about CommonJS module caching is true?",
                "options": [
                    "Modules are cached after the first load and reused",
                    "Modules reload on every require call",
                    "There is no caching",
                    "Caching only works for JSON files"
                ],
                "answer": "Modules are cached after the first load and reused"
            },
            {
                "question": "Which is a correct way to export multiple named functions in ES6?",
                "options": [
                    "export function foo() {}; export function bar() {};",
                    "module.exports = { foo, bar };",
                    "exports.foo = foo; exports.bar = bar;",
                    "export default { foo, bar };"
                ],
                "answer": "export function foo() {}; export function bar() {};"
            },
            {
                "question": "Can ES6 modules export variables that can be reassigned by imports?",
                "options": [
                    "No, imports are read-only live bindings",
                    "Yes, imports can reassign exported variables",
                    "Only constants can be exported",
                    "Exports cannot be variables"
                ],
                "answer": "No, imports are read-only live bindings"
            },
            {
                "question": "How can you import all named exports as a single object in ES6?",
                "options": [
                    "import * as Utils from './utils';",
                    "import { * } from './utils';",
                    "const Utils = require('./utils');",
                    "import Utils from './utils';"
                ],
                "answer": "import * as Utils from './utils';"
            },
            {
                "question": "What is the effect of 'export default' in a module with respect to imports?",
                "options": [
                    "It allows importing without braces",
                    "It requires braces around import",
                    "You cannot import default exports",
                    "It exports all named exports as default"
                ],
                "answer": "It allows importing without braces"
            },
            {
                "question": "Which module system supports synchronous loading, CommonJS or ES6?",
                "options": [
                    "CommonJS supports synchronous loading",
                    "ES6 supports synchronous loading",
                    "Both support synchronous loading",
                    "Neither supports synchronous loading"
                ],
                "answer": "CommonJS supports synchronous loading"
            },
            {
                "question": "What is the recommended way to export a single object with multiple properties in CommonJS?",
                "options": [
                    "module.exports = { prop1, prop2 };",
                    "exports = { prop1, prop2 };",
                    "export default { prop1, prop2 };",
                    "export { prop1, prop2 };"
                ],
                "answer": "module.exports = { prop1, prop2 };"
            },
            {
                "question": "Which statement is true about the difference between 'exports' and 'module.exports' in CommonJS?",
                "options": [
                    "'module.exports' is what is returned, 'exports' is a shortcut",
                    "'exports' is what is returned, 'module.exports' is a shortcut",
                    "Both are the same",
                    "'exports' is read-only"
                ],
                "answer": "'module.exports' is what is returned, 'exports' is a shortcut"
            },
            {
                "question": "Which of these will correctly export a named constant in ES6?",
                "options": [
                    "export const PI = 3.14;",
                    "module.exports.PI = 3.14;",
                    "exports.PI = 3.14;",
                    "export default const PI = 3.14;"
                ],
                "answer": "export const PI = 3.14;"
            },
            {
                "question": "How do ES6 modules improve bundlers like Webpack's optimization?",
                "options": [
                    "Because of static imports, bundlers can tree-shake unused exports",
                    "Because they are dynamic, bundlers can optimize loading",
                    "Because they use require(), bundlers cache modules",
                    "Bundlers do not support ES6 modules"
                ],
                "answer": "Because of static imports, bundlers can tree-shake unused exports"
            },
            {
                "question": "Which of the following describes the ES6 'import' statement?",
                "options": [
                    "It is statically analyzed and must be at the top-level scope",
                    "It can be used anywhere dynamically",
                    "It returns a promise",
                    "It is the same as require()"
                ],
                "answer": "It is statically analyzed and must be at the top-level scope"
            },
            {
                "question": "What is the purpose of setting \"type\": \"module\" in package.json?",
                "options": [
                    "To tell Node.js to treat .js files as ES6 modules",
                    "To enable CommonJS",
                    "To disable ES6 modules",
                    "To specify the main entry point"
                ],
                "answer": "To tell Node.js to treat .js files as ES6 modules"
            }
        ],
        advanced: [
            {
                "question": "In ES6 modules, what happens if you try to reassign an imported binding?",
                "options": [
                    "Throws a SyntaxError at compile time",
                    "Reassigns the import locally without affecting the module",
                    "Updates the export in the original module",
                    "Creates a new binding in the importing module"
                ],
                "answer": "Throws a SyntaxError at compile time"
            },
            {
                "question": "How does the 'import()' function behave differently compared to static 'import' in ES6?",
                "options": [
                    "'import()' returns a promise and loads modules asynchronously",
                    "'import()' is synchronous like require()",
                    "'import()' can only load JSON files",
                    "'import()' is used only in browsers"
                ],
                "answer": "'import()' returns a promise and loads modules asynchronously"
            },
            {
                "question": "Which of the following is true about CommonJS module scope?",
                "options": [
                    "Each module has its own private scope",
                    "All modules share the same global scope",
                    "Exports are globally accessible",
                    "Modules cannot have private variables"
                ],
                "answer": "Each module has its own private scope"
            },
            {
                "question": "What is the consequence of cyclic dependencies in CommonJS modules?",
                "options": [
                    "Modules receive partially executed exports object",
                    "Modules throw runtime errors immediately",
                    "Modules reload infinitely",
                    "Modules ignore cyclic dependencies"
                ],
                "answer": "Modules receive partially executed exports object"
            },
            {
                "question": "Which approach is best to export a mutable value in ES6 modules?",
                "options": [
                    "Export a let or var variable and update it in the module",
                    "Use export default for primitive values",
                    "Export a constant object and mutate its properties",
                    "Use module.exports instead"
                ],
                "answer": "Export a let or var variable and update it in the module"
            },
            {
                "question": "How are ES6 modules statically analyzable by tools and bundlers?",
                "options": [
                    "Because import and export statements are statically defined and cannot be conditional",
                    "Because modules are executed at runtime only",
                    "Because CommonJS syntax is used",
                    "Because dynamic import() is the default"
                ],
                "answer": "Because import and export statements are statically defined and cannot be conditional"
            },
            {
                "question": "What happens if you mix CommonJS and ES6 imports in the same file?",
                "options": [
                    "ES6 imports are hoisted, CommonJS require executes dynamically",
                    "It throws a syntax error",
                    "CommonJS requires are ignored",
                    "ES6 imports convert to CommonJS requires automatically"
                ],
                "answer": "ES6 imports are hoisted, CommonJS require executes dynamically"
            },
            {
                "question": "What is the role of 'module' object in CommonJS?",
                "options": [
                    "It contains metadata and the exports object",
                    "It is the same as 'exports'",
                    "It is a global singleton",
                    "It is deprecated"
                ],
                "answer": "It contains metadata and the exports object"
            },
            {
                "question": "Which of the following best explains tree shaking in ES6 modules?",
                "options": [
                    "Eliminating unused exports during bundling due to static analysis",
                    "Caching imported modules",
                    "Replacing dynamic imports with static imports",
                    "Loading modules lazily on demand"
                ],
                "answer": "Eliminating unused exports during bundling due to static analysis"
            },
            {
                "question": "How can you access the default export from a CommonJS module when importing in ES6?",
                "options": [
                    "Using import pkg from 'pkg'; and setting up interoperability in build tools",
                    "Using require('pkg').default",
                    "Using import * as pkg from 'pkg';",
                    "CommonJS modules have no default export"
                ],
                "answer": "Using import pkg from 'pkg'; and setting up interoperability in build tools"
            },
            {
                "question": "Why does assigning directly to 'exports' not work as expected in CommonJS?",
                "options": [
                    "Because 'exports' is just a reference to 'module.exports' and reassigning breaks the reference",
                    "Because 'exports' is read-only",
                    "Because you must only assign to 'module.exports'",
                    "Because 'exports' is deprecated"
                ],
                "answer": "Because 'exports' is just a reference to 'module.exports' and reassigning breaks the reference"
            },
            {
                "question": "What is the behavior of 'import.meta' in ES6 modules?",
                "options": [
                    "Provides metadata about the current module",
                    "Allows importing meta modules",
                    "Is a function that returns module details",
                    "It is deprecated"
                ],
                "answer": "Provides metadata about the current module"
            },
            {
                "question": "In which environment is CommonJS the default module system?",
                "options": [
                    "Node.js before ES modules support",
                    "Browsers",
                    "Deno runtime",
                    "All modern JavaScript runtimes"
                ],
                "answer": "Node.js before ES modules support"
            },
            {
                "question": "How does the 'export default' statement differ semantically from named exports?",
                "options": [
                    "It exports a single main value without a name",
                    "It exports multiple values with names",
                    "It can only export functions",
                    "It automatically imports dependencies"
                ],
                "answer": "It exports a single main value without a name"
            },
            {
                "question": "What does 'await import()' enable in ES6 modules?",
                "options": [
                    "Dynamic asynchronous module loading",
                    "Static synchronous imports",
                    "Synchronous require calls",
                    "Imports CSS files"
                ],
                "answer": "Dynamic asynchronous module loading"
            },
            {
                "question": "What is a downside of using CommonJS modules in large projects compared to ES6 modules?",
                "options": [
                    "Lack of static analysis and tree shaking support",
                    "They are harder to write",
                    "They don't support default exports",
                    "They can't be used in Node.js"
                ],
                "answer": "Lack of static analysis and tree shaking support"
            },
            {
                "question": "How does ES6 module loading affect performance compared to CommonJS in browsers?",
                "options": [
                    "ES6 modules can be loaded in parallel, improving performance",
                    "CommonJS modules are faster due to synchronous loading",
                    "Both have the same performance",
                    "CommonJS modules are optimized for browsers"
                ],
                "answer": "ES6 modules can be loaded in parallel, improving performance"
            },
            {
                "question": "How can you re-export a named export from another module in ES6?",
                "options": [
                    "export { named } from './module';",
                    "export default named from './module';",
                    "import { named } from './module'; export named;",
                    "require('./module').named;"
                ],
                "answer": "export { named } from './module';"
            },
            {
                "question": "What does the 'exports' object represent in CommonJS?",
                "options": [
                    "A shortcut alias for 'module.exports'",
                    "The imported module",
                    "Global exports for the app",
                    "Deprecated object"
                ],
                "answer": "A shortcut alias for 'module.exports'"
            },
            {
                "question": "How do ES6 modules handle variable exports differently than CommonJS?",
                "options": [
                    "ES6 exports are live bindings, CommonJS exports are copies",
                    "CommonJS exports are live bindings, ES6 are copies",
                    "Both use live bindings",
                    "Neither supports live bindings"
                ],
                "answer": "ES6 exports are live bindings, CommonJS exports are copies"
            },
            {
                "question": "What would happen if you use 'require()' to load an ES6 module without transpilation in Node.js?",
                "options": [
                    "It will throw a SyntaxError",
                    "It will load successfully",
                    "It will load asynchronously",
                    "It will cache the module twice"
                ],
                "answer": "It will throw a SyntaxError"
            },
            {
                "question": "How can you export a class as default in ES6?",
                "options": [
                    "export default class MyClass {}",
                    "module.exports = class MyClass {}",
                    "exports.default = class MyClass {}",
                    "export class MyClass default {}"
                ],
                "answer": "export default class MyClass {}"
            },
            {
                "question": "Which statement best describes named imports in ES6?",
                "options": [
                    "Import specific exports by their exported name",
                    "Import the entire module as an object",
                    "Import only the default export",
                    "Import modules dynamically"
                ],
                "answer": "Import specific exports by their exported name"
            },
            {
                "question": "What is the recommended way to export multiple values in CommonJS?",
                "options": [
                    "Assign an object to module.exports",
                    "Use multiple export statements",
                    "Use export default with an object",
                    "Use ES6 named exports"
                ],
                "answer": "Assign an object to module.exports"
            },
            {
                "question": "What is one advantage of ES6 modules over CommonJS for bundlers?",
                "options": [
                    "Enables tree shaking by static analysis",
                    "Supports synchronous loading",
                    "Automatically caches modules",
                    "Works only in Node.js"
                ],
                "answer": "Enables tree shaking by static analysis"
            },
            {
                "question": "What does the 'default' keyword indicate in ES6 module exports?",
                "options": [
                    "The single main export from a module",
                    "Multiple named exports",
                    "An alias for all exports",
                    "A deprecated feature"
                ],
                "answer": "The single main export from a module"
            },
            {
                "question": "How do ES6 modules enable better tooling support?",
                "options": [
                    "Static imports and exports allow tooling to analyze dependencies before runtime",
                    "Dynamic require calls",
                    "Global variables for modules",
                    "No special tooling is required"
                ],
                "answer": "Static imports and exports allow tooling to analyze dependencies before runtime"
            },
            {
                "question": "What happens when you import a module with 'import * as mod from \"./module\";'?",
                "options": [
                    "Imports all named exports as properties of the 'mod' object",
                    "Imports only the default export",
                    "Imports nothing",
                    "Imports dynamically"
                ],
                "answer": "Imports all named exports as properties of the 'mod' object"
            },
            {
                "question": "Which file extension is recommended for ES6 modules in Node.js to avoid ambiguity?",
                "options": [
                    ".mjs",
                    ".cjs",
                    ".js",
                    ".json"
                ],
                "answer": ".mjs"
            },
            {
                "question": "What will happen if you try to use 'require' inside an ES6 module without transpilation?",
                "options": [
                    "Throws ReferenceError: require is not defined",
                    "It works fine",
                    "It behaves asynchronously",
                    "It automatically converts to import"
                ],
                "answer": "Throws ReferenceError: require is not defined"
            },
            {
                "question": "How can you alias an imported named export in ES6?",
                "options": [
                    "import { originalName as aliasName } from './module';",
                    "import aliasName from './module';",
                    "export { originalName as aliasName };",
                    "const aliasName = require('./module').originalName;"
                ],
                "answer": "import { originalName as aliasName } from './module';"
            },
            {
                "question": "What is a common use case for dynamic 'import()' in ES6?",
                "options": [
                    "Code-splitting and lazy loading modules",
                    "Importing JSON files",
                    "Replacing require() completely",
                    "Static import of all dependencies"
                ],
                "answer": "Code-splitting and lazy loading modules"
            },
            {
                "question": "Which of the following is true about ES6 module export bindings?",
                "options": [
                    "They are live and reflect changes in the exported variable",
                    "They are copies of exported values",
                    "They cannot export objects",
                    "They are always immutable"
                ],
                "answer": "They are live and reflect changes in the exported variable"
            },
            {
                "question": "What is the effect of setting 'type': 'module' in package.json?",
                "options": [
                    "Makes Node.js treat .js files as ES modules",
                    "Disables CommonJS",
                    "Forces dynamic imports",
                    "Enables top-level await only"
                ],
                "answer": "Makes Node.js treat .js files as ES modules"
            },
            {
                "question": "How does CommonJS handle JSON file imports?",
                "options": [
                    "It parses JSON and caches the resulting object",
                    "It imports them as strings",
                    "It throws errors",
                    "It does not support JSON"
                ],
                "answer": "It parses JSON and caches the resulting object"
            },
            {
                "question": "Which of the following is true about ES6 module execution?",
                "options": [
                    "Modules are executed once when first imported",
                    "Modules execute every time they are imported",
                    "Modules execute in parallel with no order",
                    "Modules don’t execute automatically"
                ],
                "answer": "Modules are executed once when first imported"
            },
            {
                "question": "What is the syntax to import a module's default export along with named exports?",
                "options": [
                    "import defaultExport, { named1, named2 } from './module';",
                    "import { defaultExport, named1, named2 } from './module';",
                    "import * as module from './module';",
                    "const { defaultExport, named1 } = require('./module');"
                ],
                "answer": "import defaultExport, { named1, named2 } from './module';"
            },
            {
                "question": "How can you verify if a module has been loaded and cached in CommonJS?",
                "options": [
                    "By checking require.cache",
                    "By checking module.loaded property",
                    "By using exports.status",
                    "By using import.meta"
                ],
                "answer": "By checking require.cache"
            },
            {
                "question": "Which module type does Node.js use when the file extension is '.cjs'?",
                "options": [
                    "CommonJS",
                    "ES6 Module",
                    "AMD",
                    "UMD"
                ],
                "answer": "CommonJS"
            },
            {
                "question": "How does ES6 handle circular dependencies differently than CommonJS?",
                "options": [
                    "ES6 provides live bindings that update exports, CommonJS provides cached incomplete exports",
                    "ES6 throws errors on circular dependencies",
                    "CommonJS handles circular dependencies better",
                    "They handle circular dependencies the same way"
                ],
                "answer": "ES6 provides live bindings that update exports, CommonJS provides cached incomplete exports"
            },
            {
                "question": "What is the significance of the 'exports' object in CommonJS modules?",
                "options": [
                    "It is an alias for module.exports for convenience",
                    "It is the global export object",
                    "It is a deprecated object",
                    "It is used for asynchronous exports"
                ],
                "answer": "It is an alias for module.exports for convenience"
            },
            {
                "question": "What happens when you export a primitive value with 'export const' in ES6 and later change its value?",
                "options": [
                    "Importers see the updated value due to live bindings",
                    "Importers keep the original value",
                    "It throws an error",
                    "Primitives cannot be exported"
                ],
                "answer": "Importers see the updated value due to live bindings"
            },
            {
                "question": "Which of the following is a reason to prefer ES6 modules over CommonJS?",
                "options": [
                    "Better static analysis for optimizations",
                    "Dynamic loading of modules",
                    "Backward compatibility with old Node.js",
                    "No transpilation needed for browsers"
                ],
                "answer": "Better static analysis for optimizations"
            },
            {
                "question": "What is the purpose of 'module.exports' in CommonJS?",
                "options": [
                    "Defines the object returned by require()",
                    "Contains metadata about the module",
                    "Is a global object",
                    "Is deprecated"
                ],
                "answer": "Defines the object returned by require()"
            },
            {
                "question": "How does ES6 module import order affect side effects?",
                "options": [
                    "Modules are executed in the order of static import statements",
                    "Order is random",
                    "Modules execute in parallel without order",
                    "Side effects are ignored"
                ],
                "answer": "Modules are executed in the order of static import statements"
            },
            {
                "question": "Which statement best describes how exports work in ES6 modules?",
                "options": [
                    "Exports are live read-only bindings to variables",
                    "Exports are copies of variables",
                    "Exports are mutable copies",
                    "Exports are global variables"
                ],
                "answer": "Exports are live read-only bindings to variables"
            },
            {
                "question": "What is the main benefit of using 'import' over 'require' in frontend JavaScript?",
                "options": [
                    "Allows static analysis and tree shaking by bundlers",
                    "Requires less code",
                    "Is asynchronous by default",
                    "Works only with JSON"
                ],
                "answer": "Allows static analysis and tree shaking by bundlers"
            }
        ],

    },
    git: {
        beginners: [
            {
                "question": "What is Git?",
                "options": [
                    "A version control system",
                    "A programming language",
                    "A web hosting service",
                    "A text editor"
                ],
                "answer": "A version control system"
            },
            {
                "question": "What command initializes a new Git repository?",
                "options": [
                    "git init",
                    "git start",
                    "git create",
                    "git new"
                ],
                "answer": "git init"
            },
            {
                "question": "Which command stages changes for commit in Git?",
                "options": [
                    "git add",
                    "git commit",
                    "git push",
                    "git clone"
                ],
                "answer": "git add"
            },
            {
                "question": "What command is used to save changes in Git?",
                "options": [
                    "git commit",
                    "git save",
                    "git push",
                    "git stage"
                ],
                "answer": "git commit"
            },
            {
                "question": "What does the command 'git status' do?",
                "options": [
                    "Shows the current status of the working directory and staging area",
                    "Displays commit history",
                    "Deletes files",
                    "Creates a new branch"
                ],
                "answer": "Shows the current status of the working directory and staging area"
            },
            {
                "question": "What is the purpose of the 'git clone' command?",
                "options": [
                    "To copy an existing repository from a remote server",
                    "To initialize a new repository",
                    "To merge two branches",
                    "To stage files"
                ],
                "answer": "To copy an existing repository from a remote server"
            },
            {
                "question": "What command uploads local commits to a remote repository?",
                "options": [
                    "git push",
                    "git pull",
                    "git fetch",
                    "git commit"
                ],
                "answer": "git push"
            },
            {
                "question": "What command downloads changes from a remote repository and merges them?",
                "options": [
                    "git pull",
                    "git push",
                    "git clone",
                    "git merge"
                ],
                "answer": "git pull"
            },
            {
                "question": "What file is used to ignore files in Git?",
                "options": [
                    ".gitignore",
                    "ignore.txt",
                    "gitignore.txt",
                    ".ignore"
                ],
                "answer": ".gitignore"
            },
            {
                "question": "What does the 'git branch' command do?",
                "options": [
                    "Lists, creates, or deletes branches",
                    "Deletes files",
                    "Merges branches",
                    "Initializes repository"
                ],
                "answer": "Lists, creates, or deletes branches"
            },
            {
                "question": "What command is used to switch branches in Git?",
                "options": [
                    "git checkout",
                    "git switch",
                    "git merge",
                    "git branch"
                ],
                "answer": "git checkout"
            },
            {
                "question": "What is the main purpose of branching in Git?",
                "options": [
                    "To work on different features independently",
                    "To delete files safely",
                    "To create backups",
                    "To push changes faster"
                ],
                "answer": "To work on different features independently"
            },
            {
                "question": "What does 'git merge' do?",
                "options": [
                    "Combines changes from one branch into another",
                    "Deletes a branch",
                    "Uploads changes to remote",
                    "Creates a new repository"
                ],
                "answer": "Combines changes from one branch into another"
            },
            {
                "question": "What is a commit in Git?",
                "options": [
                    "A saved snapshot of the project",
                    "A deleted file",
                    "A remote repository",
                    "A branch name"
                ],
                "answer": "A saved snapshot of the project"
            },
            {
                "question": "What does 'git log' show?",
                "options": [
                    "A history of commits",
                    "A list of files",
                    "A list of branches",
                    "Current status"
                ],
                "answer": "A history of commits"
            },
            {
                "question": "What is GitHub?",
                "options": [
                    "A web-based hosting service for Git repositories",
                    "A Git client software",
                    "A text editor",
                    "A programming language"
                ],
                "answer": "A web-based hosting service for Git repositories"
            },
            {
                "question": "How do you create a new repository on GitHub?",
                "options": [
                    "Click 'New repository' on GitHub website",
                    "Use 'git new' command",
                    "Use 'git init' remotely",
                    "Send an email to GitHub"
                ],
                "answer": "Click 'New repository' on GitHub website"
            },
            {
                "question": "What is a 'fork' on GitHub?",
                "options": [
                    "A personal copy of someone else's repository",
                    "A new branch",
                    "A deleted repository",
                    "A type of commit"
                ],
                "answer": "A personal copy of someone else's repository"
            },
            {
                "question": "What is a 'pull request' on GitHub?",
                "options": [
                    "A request to merge changes from one branch or fork to another",
                    "A command to delete branches",
                    "A notification for new commits",
                    "A way to clone a repo"
                ],
                "answer": "A request to merge changes from one branch or fork to another"
            },
            {
                "question": "What command do you use to see the remote repositories connected to your Git repo?",
                "options": [
                    "git remote -v",
                    "git status",
                    "git fetch",
                    "git branch"
                ],
                "answer": "git remote -v"
            },
            {
                "question": "What is the default branch name in GitHub repositories?",
                "options": [
                    "main",
                    "master",
                    "default",
                    "primary"
                ],
                "answer": "main"
            },
            {
                "question": "What command downloads changes from the remote repository without merging?",
                "options": [
                    "git fetch",
                    "git pull",
                    "git clone",
                    "git push"
                ],
                "answer": "git fetch"
            },
            {
                "question": "What does the command 'git reset' do?",
                "options": [
                    "Unstages files or moves HEAD to a previous commit",
                    "Deletes the repository",
                    "Shows commit logs",
                    "Creates a new branch"
                ],
                "answer": "Unstages files or moves HEAD to a previous commit"
            },
            {
                "question": "Which command shows changes between commits or the working directory?",
                "options": [
                    "git diff",
                    "git status",
                    "git log",
                    "git branch"
                ],
                "answer": "git diff"
            },
            {
                "question": "What is the function of the .git directory in a repository?",
                "options": [
                    "Stores all the version control information for the project",
                    "Stores project source files",
                    "Stores remote backups",
                    "Is a cache for large files"
                ],
                "answer": "Stores all the version control information for the project"
            },
            {
                "question": "How do you delete a branch locally in Git?",
                "options": [
                    "git branch -d branch_name",
                    "git delete branch_name",
                    "git remove branch_name",
                    "git branch -r branch_name"
                ],
                "answer": "git branch -d branch_name"
            },
            {
                "question": "How do you rename a branch in Git?",
                "options": [
                    "git branch -m old_name new_name",
                    "git rename old_name new_name",
                    "git branch -r new_name",
                    "git switch new_name"
                ],
                "answer": "git branch -m old_name new_name"
            },
            {
                "question": "What does the 'git tag' command do?",
                "options": [
                    "Creates a named point in history (like a release)",
                    "Deletes branches",
                    "Lists files",
                    "Uploads commits"
                ],
                "answer": "Creates a named point in history (like a release)"
            },
            {
                "question": "How can you view the changes in a specific commit?",
                "options": [
                    "git show commit_hash",
                    "git diff commit_hash",
                    "git log commit_hash",
                    "git status commit_hash"
                ],
                "answer": "git show commit_hash"
            },
            {
                "question": "What is a merge conflict?",
                "options": [
                    "When Git cannot automatically merge changes and needs manual intervention",
                    "When a branch is deleted",
                    "When commits are lost",
                    "When a push fails"
                ],
                "answer": "When Git cannot automatically merge changes and needs manual intervention"
            },
            {
                "question": "How do you resolve a merge conflict?",
                "options": [
                    "Manually edit conflicting files, then add and commit the changes",
                    "Delete the branch",
                    "Run git push again",
                    "Use git revert"
                ],
                "answer": "Manually edit conflicting files, then add and commit the changes"
            },
            {
                "question": "What is the 'HEAD' in Git?",
                "options": [
                    "A pointer to the current commit",
                    "The first commit in the repository",
                    "The remote repository",
                    "A branch name"
                ],
                "answer": "A pointer to the current commit"
            },
            {
                "question": "Which command creates a new branch and switches to it?",
                "options": [
                    "git checkout -b branch_name",
                    "git branch branch_name",
                    "git switch branch_name",
                    "git new branch_name"
                ],
                "answer": "git checkout -b branch_name"
            },
            {
                "question": "What is a 'remote' in Git?",
                "options": [
                    "A version of the repository hosted on a server",
                    "A local branch",
                    "A local file",
                    "A commit hash"
                ],
                "answer": "A version of the repository hosted on a server"
            },
            {
                "question": "What does 'git stash' do?",
                "options": [
                    "Temporarily saves changes that are not committed",
                    "Deletes untracked files",
                    "Commits changes",
                    "Creates a new branch"
                ],
                "answer": "Temporarily saves changes that are not committed"
            },
            {
                "question": "How do you apply stashed changes back to your working directory?",
                "options": [
                    "git stash apply",
                    "git stash pop",
                    "git stash restore",
                    "git stash commit"
                ],
                "answer": "git stash apply"
            },
            {
                "question": "What is the difference between 'git stash apply' and 'git stash pop'?",
                "options": [
                    "'git stash pop' applies and removes stash; 'git stash apply' only applies",
                    "They are the same",
                    "'git stash apply' deletes the stash; 'git stash pop' keeps it",
                    "Only 'git stash pop' can be used multiple times"
                ],
                "answer": "'git stash pop' applies and removes stash; 'git stash apply' only applies"
            },
            {
                "question": "What is the purpose of a README file in GitHub repositories?",
                "options": [
                    "To provide information about the project",
                    "To store source code",
                    "To configure Git settings",
                    "To track issues"
                ],
                "answer": "To provide information about the project"
            },
            {
                "question": "What command do you use to configure your user name for Git commits?",
                "options": [
                    "git config --global user.name \"Your Name\"",
                    "git set user.name \"Your Name\"",
                    "git username set \"Your Name\"",
                    "git config user \"Your Name\""
                ],
                "answer": "git config --global user.name \"Your Name\""
            },
            {
                "question": "What command do you use to configure your email for Git commits?",
                "options": [
                    "git config --global user.email \"email@example.com\"",
                    "git set user.email \"email@example.com\"",
                    "git email set \"email@example.com\"",
                    "git config email \"email@example.com\""
                ],
                "answer": "git config --global user.email \"email@example.com\""
            },
            {
                "question": "What does the command 'git remote add origin URL' do?",
                "options": [
                    "Adds a new remote repository named origin",
                    "Renames a branch",
                    "Deletes a remote",
                    "Clones a repository"
                ],
                "answer": "Adds a new remote repository named origin"
            },
            {
                "question": "Which of these is NOT a valid Git command?",
                "options": [
                    "git explode",
                    "git status",
                    "git commit",
                    "git push"
                ],
                "answer": "git explode"
            },
            {
                "question": "What is the difference between 'git pull' and 'git fetch'?",
                "options": [
                    "'git pull' downloads and merges changes; 'git fetch' only downloads changes",
                    "They are the same",
                    "'git fetch' deletes remote changes",
                    "'git pull' uploads changes"
                ],
                "answer": "'git pull' downloads and merges changes; 'git fetch' only downloads changes"
            },
            {
                "question": "What happens when you run 'git commit' without the -m flag?",
                "options": [
                    "It opens an editor to type the commit message",
                    "It throws an error",
                    "It automatically commits with a default message",
                    "It deletes staged changes"
                ],
                "answer": "It opens an editor to type the commit message"
            },
            {
                "question": "What command would you use to see the difference between your last commit and current changes?",
                "options": [
                    "git diff HEAD",
                    "git status",
                    "git log",
                    "git checkout"
                ],
                "answer": "git diff HEAD"
            },
            {
                "question": "Which command would you use to discard changes in a file in the working directory?",
                "options": [
                    "git checkout -- filename",
                    "git reset filename",
                    "git revert filename",
                    "git delete filename"
                ],
                "answer": "git checkout -- filename"
            },
            {
                "question": "How can you undo the last commit but keep changes staged?",
                "options": [
                    "git reset --soft HEAD~1",
                    "git revert HEAD",
                    "git reset --hard HEAD~1",
                    "git checkout HEAD~1"
                ],
                "answer": "git reset --soft HEAD~1"
            },
            {
                "question": "What is the purpose of 'git rebase'?",
                "options": [
                    "To apply commits on top of another base tip",
                    "To delete a branch",
                    "To stage files",
                    "To push commits"
                ],
                "answer": "To apply commits on top of another base tip"
            },
            {
                "question": "How do you check your current branch in Git?",
                "options": [
                    "git branch",
                    "git status",
                    "git current",
                    "git show-branch"
                ],
                "answer": "git branch"
            },
            {
                "question": "What command will list all your Git remotes?",
                "options": [
                    "git remote -v",
                    "git branch",
                    "git remotes",
                    "git list"
                ],
                "answer": "git remote -v"
            },
            {
                "question": "What does 'git cherry-pick' do?",
                "options": [
                    "Applies the changes introduced by some existing commits",
                    "Deletes a commit",
                    "Shows commit history",
                    "Creates a new branch"
                ],
                "answer": "Applies the changes introduced by some existing commits"
            },
            {
                "question": "What is the significance of 'origin' in Git?",
                "options": [
                    "Default name for a remote repository",
                    "A branch name",
                    "The first commit",
                    "A file in .git directory"
                ],
                "answer": "Default name for a remote repository"
            },
            {
                "question": "How do you make a file executable in Git?",
                "options": [
                    "git update-index --chmod=+x filename",
                    "git chmod +x filename",
                    "git set-executable filename",
                    "git add executable filename"
                ],
                "answer": "git update-index --chmod=+x filename"
            },
            {
                "question": "Which command can help you undo changes in the staging area?",
                "options": [
                    "git reset HEAD filename",
                    "git undo filename",
                    "git revert filename",
                    "git checkout filename"
                ],
                "answer": "git reset HEAD filename"
            },
            {
                "question": "How do you see the configuration settings in Git?",
                "options": [
                    "git config --list",
                    "git settings",
                    "git show config",
                    "git options"
                ],
                "answer": "git config --list"
            },
            {
                "question": "What GitHub feature allows you to track bugs and enhancements?",
                "options": [
                    "Issues",
                    "Pull requests",
                    "Wiki",
                    "Projects"
                ],
                "answer": "Issues"
            },
            {
                "question": "Which file typically contains a project's license information in GitHub?",
                "options": [
                    "LICENSE",
                    "README.md",
                    ".gitignore",
                    "CONTRIBUTING.md"
                ],
                "answer": "LICENSE"
            },
            {
                "question": "What is 'GitHub Actions' used for?",
                "options": [
                    "Automating workflows like CI/CD",
                    "Managing issues",
                    "Creating branches",
                    "Storing files"
                ],
                "answer": "Automating workflows like CI/CD"
            },
            {
                "question": "How do you undo changes to a file after staging but before committing?",
                "options": [
                    "git reset HEAD filename",
                    "git revert filename",
                    "git checkout filename",
                    "git commit --amend"
                ],
                "answer": "git reset HEAD filename"
            },
            {
                "question": "What is the purpose of the 'git archive' command?",
                "options": [
                    "To create a zip or tar archive of the repository contents",
                    "To compress commit history",
                    "To backup remote repositories",
                    "To delete files"
                ],
                "answer": "To create a zip or tar archive of the repository contents"
            },
            {
                "question": "Which command would show you the SHA-1 hashes of commits?",
                "options": [
                    "git log",
                    "git status",
                    "git show",
                    "git hash"
                ],
                "answer": "git log"
            },
            {
                "question": "What does the command 'git bisect' help you do?",
                "options": [
                    "Find the commit that introduced a bug using binary search",
                    "Delete branches",
                    "Merge conflicts",
                    "Stage files"
                ],
                "answer": "Find the commit that introduced a bug using binary search"
            },
            {
                "question": "What is the command to delete a remote branch?",
                "options": [
                    "git push origin --delete branch_name",
                    "git branch -d branch_name",
                    "git remote remove branch_name",
                    "git delete branch_name"
                ],
                "answer": "git push origin --delete branch_name"
            },
            {
                "question": "What is a submodule in Git?",
                "options": [
                    "A repository embedded inside another repository",
                    "A branch",
                    "A remote",
                    "A tag"
                ],
                "answer": "A repository embedded inside another repository"
            },
            {
                "question": "Which command stages all changed files?",
                "options": [
                    "git add .",
                    "git add -a",
                    "git commit -a",
                    "git stage all"
                ],
                "answer": "git add ."
            },
            {
                "question": "What is the use of 'git clean'?",
                "options": [
                    "To remove untracked files from working directory",
                    "To delete commits",
                    "To remove branches",
                    "To stage files"
                ],
                "answer": "To remove untracked files from working directory"
            },
            {
                "question": "How can you check the differences between two branches?",
                "options": [
                    "git diff branch1..branch2",
                    "git merge branch1 branch2",
                    "git compare branch1 branch2",
                    "git status branch1 branch2"
                ],
                "answer": "git diff branch1..branch2"
            },
            {
                "question": "Which file in Git stores commit objects and metadata?",
                "options": [
                    "Inside the .git directory",
                    ".gitignore",
                    "README.md",
                    "LICENSE"
                ],
                "answer": "Inside the .git directory"
            },
            {
                "question": "How do you undo the last commit completely (discard changes)?",
                "options": [
                    "git reset --hard HEAD~1",
                    "git revert HEAD",
                    "git reset --soft HEAD~1",
                    "git checkout HEAD~1"
                ],
                "answer": "git reset --hard HEAD~1"
            },
            {
                "question": "What does 'git remote show origin' do?",
                "options": [
                    "Shows information about the remote named origin",
                    "Deletes the origin remote",
                    "Renames the remote",
                    "Shows branch history"
                ],
                "answer": "Shows information about the remote named origin"
            },
            {
                "question": "What does 'git blame filename' show?",
                "options": [
                    "Shows who last modified each line in the file",
                    "Shows all branches",
                    "Shows commit logs",
                    "Shows the file content"
                ],
                "answer": "Shows who last modified each line in the file"
            },
            {
                "question": "What is the use of 'git mv'?",
                "options": [
                    "To rename or move a file and stage the change",
                    "To merge branches",
                    "To delete files",
                    "To move commits"
                ],
                "answer": "To rename or move a file and stage the change"
            },
            {
                "question": "What is a 'detached HEAD' state?",
                "options": [
                    "When HEAD points directly to a commit instead of a branch",
                    "When HEAD is missing",
                    "When a branch is deleted",
                    "When a remote is not connected"
                ],
                "answer": "When HEAD points directly to a commit instead of a branch"
            },
            {
                "question": "How do you temporarily switch to a previous commit?",
                "options": [
                    "git checkout commit_hash",
                    "git switch commit_hash",
                    "git revert commit_hash",
                    "git reset commit_hash"
                ],
                "answer": "git checkout commit_hash"
            },
            {
                "question": "Which command stages all tracked files that have been modified?",
                "options": [
                    "git commit -a",
                    "git add .",
                    "git add -u",
                    "git stage -a"
                ],
                "answer": "git commit -a"
            },
            {
                "question": "What is the difference between 'git revert' and 'git reset'?",
                "options": [
                    "'git revert' creates a new commit that undoes a previous commit; 'git reset' moves HEAD to a previous commit",
                    "They are the same",
                    "'git reset' creates a new commit",
                    "'git revert' deletes commits permanently"
                ],
                "answer": "'git revert' creates a new commit that undoes a previous commit; 'git reset' moves HEAD to a previous commit"
            },
            {
                "question": "Which command shows the files changed in a commit?",
                "options": [
                    "git show --name-only commit_hash",
                    "git log",
                    "git diff",
                    "git status"
                ],
                "answer": "git show --name-only commit_hash"
            },
            {
                "question": "Which command creates a shallow clone (partial history)?",
                "options": [
                    "git clone --depth 1 URL",
                    "git clone --shallow URL",
                    "git clone --partial URL",
                    "git clone --lite URL"
                ],
                "answer": "git clone --depth 1 URL"
            },
            {
                "question": "What does the command 'git reflog' do?",
                "options": [
                    "Shows a log of all references changes, including HEAD movements",
                    "Shows commit history",
                    "Shows branches",
                    "Shows remote URLs"
                ],
                "answer": "Shows a log of all references changes, including HEAD movements"
            },
            {
                "question": "Which GitHub feature allows collaboration via issues, pull requests, and project boards?",
                "options": [
                    "GitHub Projects",
                    "GitHub Pages",
                    "GitHub Gists",
                    "GitHub Actions"
                ],
                "answer": "GitHub Projects"
            },
            {
                "question": "Which Git command can be used to edit the last commit message?",
                "options": [
                    "git commit --amend",
                    "git edit commit",
                    "git commit --fix",
                    "git reset --amend"
                ],
                "answer": "git commit --amend"
            },
            {
                "question": "How do you permanently delete files from the Git history?",
                "options": [
                    "Use 'git filter-branch' or 'git filter-repo'",
                    "Delete the file and commit",
                    "Use 'git rm --cached'",
                    "Use 'git reset'"
                ],
                "answer": "Use 'git filter-branch' or 'git filter-repo'"
            },
            {
                "question": "What is the use of '.gitattributes' file?",
                "options": [
                    "To define attributes for paths like line endings and diff behavior",
                    "To ignore files",
                    "To configure remotes",
                    "To write commit messages"
                ],
                "answer": "To define attributes for paths like line endings and diff behavior"
            },
            {
                "question": "What is Git LFS?",
                "options": [
                    "Git Large File Storage, used for versioning large files",
                    "Git Local File System",
                    "A type of branch",
                    "A Git command"
                ],
                "answer": "Git Large File Storage, used for versioning large files"
            }
        ],
        intermediate: [
            {
                "question": "What does the command `git rebase` do?",
                "options": [
                    "Applies commits from one branch onto another",
                    "Deletes a branch",
                    "Creates a new branch",
                    "Merges two branches automatically"
                ],
                "answer": "Applies commits from one branch onto another"
            },
            {
                "question": "What is the main difference between `git merge` and `git rebase`?",
                "options": [
                    "Merge combines histories with a merge commit; rebase rewrites commits on top of another branch",
                    "Merge deletes branches; rebase creates new branches",
                    "Merge rebases commits; rebase merges commits",
                    "They are the same"
                ],
                "answer": "Merge combines histories with a merge commit; rebase rewrites commits on top of another branch"
            },
            {
                "question": "How do you abort a rebase in progress?",
                "options": [
                    "`git rebase --abort`",
                    "`git reset --hard`",
                    "`git merge --abort`",
                    "`git checkout --abort`"
                ],
                "answer": "`git rebase --abort`"
            },
            {
                "question": "Which command helps you resolve merge conflicts during a merge or rebase?",
                "options": [
                    "Manually edit conflicted files, then `git add` them",
                    "`git push --force`",
                    "`git stash pop`",
                    "`git revert`"
                ],
                "answer": "Manually edit conflicted files, then `git add` them"
            },
            {
                "question": "What is a Git hook?",
                "options": [
                    "A script that runs automatically on certain Git events like commit or push",
                    "A special branch",
                    "A remote repository",
                    "A Git plugin"
                ],
                "answer": "A script that runs automatically on certain Git events like commit or push"
            },
            {
                "question": "Where are Git hooks stored?",
                "options": [
                    "Inside the `.git/hooks` directory",
                    "At the root of the working directory",
                    "In the GitHub repository settings",
                    "Inside the `.gitignore` file"
                ],
                "answer": "Inside the `.git/hooks` directory"
            },
            {
                "question": "What does the command `git stash` do?",
                "options": [
                    "Saves your current uncommitted changes temporarily and cleans the working directory",
                    "Commits changes to a new branch",
                    "Deletes files from the working directory",
                    "Pushes changes to the remote repository"
                ],
                "answer": "Saves your current uncommitted changes temporarily and cleans the working directory"
            },
            {
                "question": "How can you apply stashed changes after `git stash`?",
                "options": [
                    "`git stash apply`",
                    "`git stash pop`",
                    "Both A and B",
                    "`git stash commit`"
                ],
                "answer": "Both A and B"
            },
            {
                "question": "What is the purpose of `git cherry-pick`?",
                "options": [
                    "To apply a specific commit from one branch onto another branch",
                    "To delete a commit",
                    "To merge branches",
                    "To rename branches"
                ],
                "answer": "To apply a specific commit from one branch onto another branch"
            },
            {
                "question": "What does `git fetch` do?",
                "options": [
                    "Downloads commits and data from the remote repository without merging them",
                    "Downloads and merges commits from the remote repository automatically",
                    "Deletes remote branches",
                    "Pushes local commits to the remote repository"
                ],
                "answer": "Downloads commits and data from the remote repository without merging them"
            },
            {
                "question": "What command do you use to synchronize your local branch with the remote branch, incorporating remote changes?",
                "options": [
                    "`git pull`",
                    "`git fetch`",
                    "`git push`",
                    "`git merge`"
                ],
                "answer": "`git pull`"
            },
            {
                "question": "What is a fast-forward merge?",
                "options": [
                    "When the branch can be updated by moving the pointer forward without creating a merge commit",
                    "When two branches are merged creating a new commit",
                    "When a merge conflict occurs",
                    "When a rebase is in progress"
                ],
                "answer": "When the branch can be updated by moving the pointer forward without creating a merge commit"
            },
            {
                "question": "What does the `git reset --soft HEAD~1` command do?",
                "options": [
                    "Moves HEAD to the previous commit but keeps changes staged",
                    "Deletes the last commit and changes",
                    "Moves HEAD and discards changes",
                    "Reverts the last commit creating a new commit"
                ],
                "answer": "Moves HEAD to the previous commit but keeps changes staged"
            },
            {
                "question": "How do you set up a remote repository URL?",
                "options": [
                    "`git remote add origin <url>`",
                    "`git clone <url>`",
                    "`git push origin <url>`",
                    "`git fetch origin <url>`"
                ],
                "answer": "`git remote add origin <url>`"
            },
            {
                "question": "What does `git tag` do?",
                "options": [
                    "Creates a reference to a specific commit, often used to mark releases",
                    "Lists branches",
                    "Deletes a branch",
                    "Shows commit logs"
                ],
                "answer": "Creates a reference to a specific commit, often used to mark releases"
            },
            {
                "question": "Which GitHub feature helps you automate code quality checks and tests on pull requests?",
                "options": [
                    "GitHub Actions",
                    "GitHub Pages",
                    "GitHub Projects",
                    "GitHub Gists"
                ],
                "answer": "GitHub Actions"
            },
            {
                "question": "What does the command `git config --global user.name \"Your Name\"` do?",
                "options": [
                    "Sets your Git username globally on your machine",
                    "Creates a new user",
                    "Adds a collaborator to a repository",
                    "Deletes user settings"
                ],
                "answer": "Sets your Git username globally on your machine"
            },
            {
                "question": "What does `git log --graph --oneline` show?",
                "options": [
                    "A visual graph of commits with simplified commit messages",
                    "All files changed in the last commit",
                    "Current branch status",
                    "Remote URLs"
                ],
                "answer": "A visual graph of commits with simplified commit messages"
            },
            {
                "question": "How do you delete a local branch named `feature-xyz`?",
                "options": [
                    "`git branch -d feature-xyz`",
                    "`git delete branch feature-xyz`",
                    "`git remove feature-xyz`",
                    "`git branch -r feature-xyz`"
                ],
                "answer": "`git branch -d feature-xyz`"
            },
            {
                "question": "What is a “fork” on GitHub?",
                "options": [
                    "A copy of a repository under your GitHub account allowing you to freely experiment",
                    "A branch in the repository",
                    "A pull request",
                    "A merge conflict"
                ],
                "answer": "A copy of a repository under your GitHub account allowing you to freely experiment"
            },
            {
                "question": "What command lets you view the commit history of a file?",
                "options": [
                    "`git log filename`",
                    "`git history filename`",
                    "`git filelog`",
                    "`git show filename`"
                ],
                "answer": "`git log filename`"
            },
            {
                "question": "How can you squash multiple commits into one during a rebase?",
                "options": [
                    "Using `git rebase -i` and marking commits as squash",
                    "Using `git merge --squash`",
                    "Using `git reset --soft`",
                    "Using `git commit --amend`"
                ],
                "answer": "Using `git rebase -i` and marking commits as squash"
            },
            {
                "question": "What is the use of `git remote prune origin`?",
                "options": [
                    "Removes references to remote branches that no longer exist",
                    "Deletes the remote repository",
                    "Fetches remote changes",
                    "Pushes local changes"
                ],
                "answer": "Removes references to remote branches that no longer exist"
            },
            {
                "question": "What is a 'detached HEAD' state in Git?",
                "options": [
                    "When HEAD points directly to a commit instead of a branch",
                    "When HEAD is missing",
                    "When a branch is deleted",
                    "When a remote is not connected"
                ],
                "answer": "When HEAD points directly to a commit instead of a branch"
            },
            {
                "question": "Which command shows a summary of changes between commits, branches, or working directory?",
                "options": [
                    "`git diff`",
                    "`git status`",
                    "`git show`",
                    "`git log`"
                ],
                "answer": "`git diff`"
            },
            {
                "question": "What command stages all modified and deleted files?",
                "options": [
                    "`git add -u`",
                    "`git add .`",
                    "`git commit -a`",
                    "`git stage all`"
                ],
                "answer": "`git add -u`"
            },
            {
                "question": "How can you undo a pushed commit in GitHub?",
                "options": [
                    "Use `git revert` and push the new commit",
                    "Use `git reset` and push with `--force`",
                    "Delete the remote branch",
                    "You cannot undo pushed commits"
                ],
                "answer": "Use `git revert` and push the new commit"
            },
            {
                "question": "Which command lists all configured remotes and their URLs?",
                "options": [
                    "`git remote -v`",
                    "`git remotes`",
                    "`git remote show`",
                    "`git config --list`"
                ],
                "answer": "`git remote -v`"
            },
            {
                "question": "What is the effect of `git commit --amend`?",
                "options": [
                    "Modify the last commit message or add changes to the last commit",
                    "Create a new commit",
                    "Delete the last commit",
                    "Stage changes"
                ],
                "answer": "Modify the last commit message or add changes to the last commit"
            },
            {
                "question": "Which command removes files from the Git index but keeps them locally?",
                "options": [
                    "`git rm --cached filename`",
                    "`git rm filename`",
                    "`git reset filename`",
                    "`git clean`"
                ],
                "answer": "`git rm --cached filename`"
            },
            {
                "question": "How can you see which branches have been merged into the current branch?",
                "options": [
                    "`git branch --merged`",
                    "`git branch --all`",
                    "`git branch --list`",
                    "`git branch --contains`"
                ],
                "answer": "`git branch --merged`"
            },
            {
                "question": "What does the `.gitignore` file do?",
                "options": [
                    "Specifies files and directories Git should ignore",
                    "Lists remote repositories",
                    "Stores commit messages",
                    "Configures hooks"
                ],
                "answer": "Specifies files and directories Git should ignore"
            },
            {
                "question": "How can you rename a branch locally?",
                "options": [
                    "`git branch -m oldname newname`",
                    "`git rename oldname newname`",
                    "`git branch -r oldname newname`",
                    "`git switch -m oldname newname`"
                ],
                "answer": "`git branch -m oldname newname`"
            },
            {
                "question": "What does `git remote set-url origin <new_url>` do?",
                "options": [
                    "Changes the URL of the remote named origin",
                    "Deletes the origin remote",
                    "Adds a new remote",
                    "Renames a remote"
                ],
                "answer": "Changes the URL of the remote named origin"
            },
            {
                "question": "What does the command `git show commit_hash` display?",
                "options": [
                    "Details of the specified commit, including changes made",
                    "All branches",
                    "Remote URLs",
                    "Staged files"
                ],
                "answer": "Details of the specified commit, including changes made"
            },
            {
                "question": "How do you clone a specific branch from a remote repository?",
                "options": [
                    "`git clone -b branch_name --single-branch url`",
                    "`git clone branch_name url`",
                    "`git checkout branch_name` after cloning",
                    "`git fetch branch_name`"
                ],
                "answer": "`git clone -b branch_name --single-branch url`"
            },
            {
                "question": "Which command lists all remote branches?",
                "options": [
                    "`git branch -r`",
                    "`git branch`",
                    "`git remote show`",
                    "`git branch -a`"
                ],
                "answer": "`git branch -r`"
            },
            {
                "question": "What is the effect of `git push --force`?",
                "options": [
                    "Forcefully overwrites remote branch with local branch",
                    "Deletes the remote repository",
                    "Creates a new remote branch",
                    "Fetches remote changes"
                ],
                "answer": "Forcefully overwrites remote branch with local branch"
            },
            {
                "question": "Which GitHub feature allows you to review code before merging?",
                "options": [
                    "Pull Requests",
                    "Issues",
                    "Projects",
                    "Actions"
                ],
                "answer": "Pull Requests"
            },
            {
                "question": "How do you create a new branch and switch to it immediately?",
                "options": [
                    "`git checkout -b branch_name`",
                    "`git branch branch_name` then `git checkout branch_name`",
                    "`git switch branch_name`",
                    "`git create branch_name`"
                ],
                "answer": "`git checkout -b branch_name`"
            },
            {
                "question": "What does the command `git merge --no-ff branch_name` do?",
                "options": [
                    "Merges branch with a merge commit even if a fast-forward is possible",
                    "Deletes the branch after merging",
                    "Merges without a commit",
                    "Aborts the merge"
                ],
                "answer": "Merges branch with a merge commit even if a fast-forward is possible"
            },
            {
                "question": "Which file in a GitHub repository defines automated workflows?",
                "options": [
                    "`.github/workflows/` directory files",
                    "`README.md`",
                    "`LICENSE`",
                    "`CONTRIBUTING.md`"
                ],
                "answer": "`.github/workflows/` directory files"
            }
        ],
        advanced: [
            {
                "question": "What does the command `git reflog` do?",
                "options": [
                    "Shows a log of all recent changes to the HEAD and branches",
                    "Displays the commit history of the current branch",
                    "Lists all remote repositories",
                    "Shows the status of working directory"
                ],
                "answer": "Shows a log of all recent changes to the HEAD and branches"
            },
            {
                "question": "What is the effect of `git filter-branch`?",
                "options": [
                    "Rewrites history by filtering commits based on criteria",
                    "Filters files in the working directory",
                    "Deletes branches selectively",
                    "Filters remote branches"
                ],
                "answer": "Rewrites history by filtering commits based on criteria"
            },
            {
                "question": "Which command can be used to safely rewrite the author of all previous commits?",
                "options": [
                    "`git filter-branch --env-filter`",
                    "`git rebase -i`",
                    "`git commit --amend`",
                    "`git cherry-pick`"
                ],
                "answer": "`git filter-branch --env-filter`"
            },
            {
                "question": "What does the `git bisect` command do?",
                "options": [
                    "Helps find the commit that introduced a bug by binary search",
                    "Splits a branch into two",
                    "Merges two conflicting commits",
                    "Displays detailed commit logs"
                ],
                "answer": "Helps find the commit that introduced a bug by binary search"
            },
            {
                "question": "How can you temporarily record the state of your working directory without committing?",
                "options": [
                    "Using `git stash`",
                    "Using `git commit --amend`",
                    "Using `git reset`",
                    "Using `git tag`"
                ],
                "answer": "Using `git stash`"
            },
            {
                "question": "Which Git command lets you edit the commit message of any commit in history?",
                "options": [
                    "`git rebase -i`",
                    "`git commit --amend`",
                    "`git reset`",
                    "`git cherry-pick`"
                ],
                "answer": "`git rebase -i`"
            },
            {
                "question": "What is the difference between a lightweight and an annotated Git tag?",
                "options": [
                    "Annotated tags store extra metadata; lightweight tags are just pointers",
                    "Lightweight tags store metadata; annotated tags are simple pointers",
                    "There is no difference",
                    "Lightweight tags are remote-only"
                ],
                "answer": "Annotated tags store extra metadata; lightweight tags are just pointers"
            },
            {
                "question": "What is the purpose of `git worktree`?",
                "options": [
                    "Allows multiple working directories linked to the same repository",
                    "Creates new branches",
                    "Manages remote repositories",
                    "Handles merge conflicts"
                ],
                "answer": "Allows multiple working directories linked to the same repository"
            },
            {
                "question": "Which command shows the difference between staged and unstaged changes?",
                "options": [
                    "`git diff`",
                    "`git diff --cached`",
                    "`git status`",
                    "`git log`"
                ],
                "answer": "`git diff`"
            },
            {
                "question": "What is the effect of `git push --force-with-lease`?",
                "options": [
                    "Force push but only if the remote branch hasn't changed since last fetch",
                    "Deletes the remote branch",
                    "Pushes without checking remote state",
                    "Pushes tags only"
                ],
                "answer": "Force push but only if the remote branch hasn't changed since last fetch"
            },
            {
                "question": "What does the command `git remote update` do?",
                "options": [
                    "Fetches updates for all remotes",
                    "Deletes all remotes",
                    "Pushes changes to all remotes",
                    "Renames remotes"
                ],
                "answer": "Fetches updates for all remotes"
            },
            {
                "question": "How can you prevent sensitive files from being accidentally committed to Git?",
                "options": [
                    "By adding them to `.gitignore` and using `git update-index --assume-unchanged`",
                    "By deleting them",
                    "By renaming files",
                    "By committing them to a protected branch"
                ],
                "answer": "By adding them to `.gitignore` and using `git update-index --assume-unchanged`"
            },
            {
                "question": "Which command can be used to verify the integrity of objects in the Git repository?",
                "options": [
                    "`git fsck`",
                    "`git gc`",
                    "`git clean`",
                    "`git verify`"
                ],
                "answer": "`git fsck`"
            },
            {
                "question": "What is a 'shallow clone'?",
                "options": [
                    "A clone with limited history (e.g., last N commits only)",
                    "A clone without remote configuration",
                    "A clone of only a single branch",
                    "A clone with all branches and tags"
                ],
                "answer": "A clone with limited history (e.g., last N commits only)"
            },
            {
                "question": "How do you squash multiple commits into one without losing commit messages?",
                "options": [
                    "Using `git rebase -i` and marking commits as squash or fixup",
                    "Using `git merge --squash`",
                    "Using `git commit --amend` repeatedly",
                    "Using `git reset --hard`"
                ],
                "answer": "Using `git rebase -i` and marking commits as squash or fixup"
            },
            {
                "question": "What is the purpose of the `git gc` command?",
                "options": [
                    "Garbage collects unnecessary files and optimizes the local repository",
                    "Deletes branches",
                    "Fetches updates from remote",
                    "Creates backups"
                ],
                "answer": "Garbage collects unnecessary files and optimizes the local repository"
            },
            {
                "question": "How do you create a patch file from a commit?",
                "options": [
                    "`git format-patch -1 <commit>`",
                    "`git diff > patchfile`",
                    "`git apply`",
                    "`git cherry-pick`"
                ],
                "answer": "`git format-patch -1 <commit>`"
            },
            {
                "question": "What does the `git cherry` command do?",
                "options": [
                    "Shows commits in your branch that are not in the upstream branch",
                    "Deletes remote branches",
                    "Creates new commits",
                    "Lists branches"
                ],
                "answer": "Shows commits in your branch that are not in the upstream branch"
            },
            {
                "question": "What does the `git archive` command do?",
                "options": [
                    "Creates an archive file (e.g., zip or tar) of files from a commit",
                    "Archives remote branches",
                    "Deletes old commits",
                    "Shows commit history"
                ],
                "answer": "Creates an archive file (e.g., zip or tar) of files from a commit"
            },
            {
                "question": "What is the purpose of `git rerere`?",
                "options": [
                    "Records how you resolve conflicts to automatically apply the same resolutions later",
                    "Deletes conflicted files",
                    "Fetches remote changes",
                    "Merges branches"
                ],
                "answer": "Records how you resolve conflicts to automatically apply the same resolutions later"
            },
            {
                "question": "What happens if you run `git reset --hard HEAD~3`?",
                "options": [
                    "Moves HEAD back 3 commits and discards all changes after those commits",
                    "Deletes last 3 commits but keeps changes staged",
                    "Reverts last 3 commits creating new commits",
                    "Moves HEAD forward 3 commits"
                ],
                "answer": "Moves HEAD back 3 commits and discards all changes after those commits"
            },
            {
                "question": "Which command shows the difference between two commits?",
                "options": [
                    "`git diff commit1 commit2`",
                    "`git log commit1..commit2`",
                    "`git show commit1 commit2`",
                    "`git status`"
                ],
                "answer": "`git diff commit1 commit2`"
            },
            {
                "question": "What is a 'bare repository' in Git?",
                "options": [
                    "A repository without a working directory, used as a remote repository",
                    "A repository with no commits",
                    "A repository with no remotes",
                    "A repository with untracked files"
                ],
                "answer": "A repository without a working directory, used as a remote repository"
            },
            {
                "question": "How do you configure Git to use a specific merge tool?",
                "options": [
                    "`git config --global merge.tool <toolname>`",
                    "`git set merge.tool <toolname>`",
                    "`git merge --tool <toolname>`",
                    "`git tool set-merge <toolname>`"
                ],
                "answer": "`git config --global merge.tool <toolname>`"
            },
            {
                "question": "What is the difference between `git revert` and `git reset`?",
                "options": [
                    "`git revert` creates a new commit that undoes changes; `git reset` moves HEAD and can discard commits",
                    "`git revert` deletes commits; `git reset` creates commits",
                    "`git revert` is for branches; `git reset` is for files",
                    "They are the same"
                ],
                "answer": "`git revert` creates a new commit that undoes changes; `git reset` moves HEAD and can discard commits"
            },
            {
                "question": "How do you edit the commit message of a commit that is not the most recent one?",
                "options": [
                    "Using `git rebase -i` and choosing 'reword' for the commit",
                    "Using `git commit --amend`",
                    "Using `git reset`",
                    "Using `git cherry-pick`"
                ],
                "answer": "Using `git rebase -i` and choosing 'reword' for the commit"
            },
            {
                "question": "What does the command `git stash pop` do?",
                "options": [
                    "Applies the most recent stash and removes it from the stash list",
                    "Creates a new stash",
                    "Lists all stashes",
                    "Deletes the stash without applying"
                ],
                "answer": "Applies the most recent stash and removes it from the stash list"
            },
            {
                "question": "Which command allows you to fetch a pull request from GitHub via CLI?",
                "options": [
                    "`git fetch origin pull/<PR-number>/head:<branch-name>`",
                    "`git pull origin <branch-name>`",
                    "`git clone pull/<PR-number>`",
                    "`git checkout pr/<PR-number>`"
                ],
                "answer": "`git fetch origin pull/<PR-number>/head:<branch-name>`"
            },
            {
                "question": "How can you rename a Git branch both locally and remotely?",
                "options": [
                    "Rename locally with `git branch -m <new>`, delete remote branch, then push the renamed branch",
                    "Only rename locally with `git branch -m`",
                    "Use `git rename-branch`",
                    "Use `git branch --rename-remote`"
                ],
                "answer": "Rename locally with `git branch -m <new>`, delete remote branch, then push the renamed branch"
            },
            {
                "question": "What is the purpose of the `.gitattributes` file?",
                "options": [
                    "To define attributes for paths, such as merge strategies and end-of-line normalization",
                    "To configure remotes",
                    "To ignore files",
                    "To define commit message templates"
                ],
                "answer": "To define attributes for paths, such as merge strategies and end-of-line normalization"
            },
            {
                "question": "What does `git submodule update --init --recursive` do?",
                "options": [
                    "Initializes and updates all submodules recursively",
                    "Deletes all submodules",
                    "Clones the main repository again",
                    "Updates remote references"
                ],
                "answer": "Initializes and updates all submodules recursively"
            },
            {
                "question": "Which Git command helps in splitting a large commit into smaller ones?",
                "options": [
                    "`git rebase -i` with the 'edit' command",
                    "`git reset --soft`",
                    "`git cherry-pick`",
                    "`git stash`"
                ],
                "answer": "`git rebase -i` with the 'edit' command"
            },
            {
                "question": "What happens when you run `git stash branch <branch-name>`?",
                "options": [
                    "Creates a new branch, checks it out, and applies the stash",
                    "Deletes a branch",
                    "Creates a branch and leaves the stash intact",
                    "Shows stash list"
                ],
                "answer": "Creates a new branch, checks it out, and applies the stash"
            },
            {
                "question": "What is the difference between `git clone` and `git fork`?",
                "options": [
                    "`git clone` copies a repo locally; `fork` is a GitHub action creating a copy under your account",
                    "`git clone` creates a remote copy; `fork` clones locally",
                    "`fork` is a git command; `clone` is a GitHub action",
                    "They are the same"
                ],
                "answer": "`git clone` copies a repo locally; `fork` is a GitHub action creating a copy under your account"
            },
            {
                "question": "What is the use of the `git worktree prune` command?",
                "options": [
                    "Removes stale worktrees that no longer exist on disk",
                    "Deletes all worktrees",
                    "Creates a new worktree",
                    "Lists worktrees"
                ],
                "answer": "Removes stale worktrees that no longer exist on disk"
            },
            {
                "question": "How do you list all commits that touched a particular file?",
                "options": [
                    "`git log -- <file>`",
                    "`git show <file>`",
                    "`git status <file>`",
                    "`git diff <file>`"
                ],
                "answer": "`git log -- <file>`"
            },
            {
                "question": "What is the difference between `git merge --no-ff` and a normal merge?",
                "options": [
                    "`--no-ff` forces a merge commit even if a fast-forward is possible",
                    "`--no-ff` deletes the branch after merging",
                    "`--no-ff` rebases instead of merging",
                    "No difference"
                ],
                "answer": "`--no-ff` forces a merge commit even if a fast-forward is possible"
            },
            {
                "question": "What is the significance of the `ORIG_HEAD` reference?",
                "options": [
                    "It stores the previous position of HEAD before dangerous operations like reset or merge",
                    "It points to the initial commit",
                    "It marks the remote HEAD",
                    "It is a temporary branch"
                ],
                "answer": "It stores the previous position of HEAD before dangerous operations like reset or merge"
            },
            {
                "question": "Which command can be used to show the file changes introduced by a specific commit?",
                "options": [
                    "`git show <commit>`",
                    "`git log --stat`",
                    "`git diff <commit>^ <commit>`",
                    "`git blame`"
                ],
                "answer": "`git show <commit>`"
            },
            {
                "question": "What does the `git config --list --show-origin` command do?",
                "options": [
                    "Lists all Git config settings along with the file where each is defined",
                    "Resets Git config to default",
                    "Shows remote origins",
                    "Shows current branch settings"
                ],
                "answer": "Lists all Git config settings along with the file where each is defined"
            },
            {
                "question": "What is the effect of `git clean -fdx`?",
                "options": [
                    "Deletes untracked files, directories, and files ignored by `.gitignore`",
                    "Fetches from remote",
                    "Deletes tracked files",
                    "Removes commits"
                ],
                "answer": "Deletes untracked files, directories, and files ignored by `.gitignore`"
            },
            {
                "question": "What is the difference between `git cherry-pick` and `git revert`?",
                "options": [
                    "`cherry-pick` applies a commit on current branch; `revert` undoes a commit by creating a new commit",
                    "`cherry-pick` deletes commits; `revert` creates commits",
                    "`cherry-pick` rebases; `revert` merges",
                    "They are the same"
                ],
                "answer": "`cherry-pick` applies a commit on current branch; `revert` undoes a commit by creating a new commit"
            },
            {
                "question": "How can you remove a file from the Git history entirely?",
                "options": [
                    "Using `git filter-branch` or `git filter-repo` to rewrite history",
                    "`git rm --cached <file>`",
                    "`git reset HEAD <file>`",
                    "`git clean`"
                ],
                "answer": "Using `git filter-branch` or `git filter-repo` to rewrite history"
            },
            {
                "question": "What does `git ls-tree` do?",
                "options": [
                    "Shows the contents of a tree object for a given commit or tree",
                    "Lists branches",
                    "Shows remote branches",
                    "Shows commit logs"
                ],
                "answer": "Shows the contents of a tree object for a given commit or tree"
            },
            {
                "question": "How do you set up Git to sign commits automatically with GPG?",
                "options": [
                    "Set `user.signingkey` and `commit.gpgsign` in Git config",
                    "Use `git commit --sign` each time",
                    "Install a Git plugin",
                    "Set SSH keys"
                ],
                "answer": "Set `user.signingkey` and `commit.gpgsign` in Git config"
            },
            {
                "question": "What is the difference between `git pull --rebase` and `git pull`?",
                "options": [
                    "`--rebase` rebases your changes on top of fetched branch; normal pull merges",
                    "`--rebase` deletes commits; normal pull resets",
                    "`--rebase` pushes changes; normal pull fetches only",
                    "No difference"
                ],
                "answer": "`--rebase` rebases your changes on top of fetched branch; normal pull merges"
            },
            {
                "question": "What does the command `git bundle` do?",
                "options": [
                    "Creates a single file package of Git objects for transport",
                    "Bundles commits into one",
                    "Archives files",
                    "Creates submodules"
                ],
                "answer": "Creates a single file package of Git objects for transport"
            },
            {
                "question": "How can you find all branches containing a specific commit?",
                "options": [
                    "`git branch --contains <commit>`",
                    "`git log --branches`",
                    "`git show-branch <commit>`",
                    "`git reflog`"
                ],
                "answer": "`git branch --contains <commit>`"
            },
            {
                "question": "What is the purpose of the `.gitkeep` file?",
                "options": [
                    "Used to track empty directories in Git",
                    "Keeps branches alive",
                    "Prevents files from being committed",
                    "Used to configure Git"
                ],
                "answer": "Used to track empty directories in Git"
            },
            {
                "question": "How do you rebase your current branch interactively against another branch?",
                "options": [
                    "`git rebase -i <other-branch>`",
                    "`git merge --interactive <other-branch>`",
                    "`git rebase --onto <other-branch>`",
                    "`git cherry-pick -i <other-branch>`"
                ],
                "answer": "`git rebase -i <other-branch>`"
            }
        ]
    },
    react: {
        beginners: [
            {
                "question": "What is React?",
                "options": [
                    "A JavaScript library for building user interfaces",
                    "A CSS framework",
                    "A database management system",
                    "A programming language"
                ],
                "answer": "A JavaScript library for building user interfaces"
            },
            {
                "question": "Who developed React?",
                "options": [
                    "Facebook",
                    "Google",
                    "Microsoft",
                    "Apple"
                ],
                "answer": "Facebook"
            },
            {
                "question": "What is JSX in React?",
                "options": [
                    "A syntax extension that looks like HTML within JavaScript",
                    "A database query language",
                    "A CSS preprocessor",
                    "A testing framework"
                ],
                "answer": "A syntax extension that looks like HTML within JavaScript"
            },
            {
                "question": "How do you create a React component?",
                "options": [
                    "By defining a JavaScript function or class that returns JSX",
                    "By writing plain HTML files",
                    "By using CSS stylesheets",
                    "By creating a database schema"
                ],
                "answer": "By defining a JavaScript function or class that returns JSX"
            },
            {
                "question": "What is a functional component?",
                "options": [
                    "A React component defined as a JavaScript function",
                    "A component written only in HTML",
                    "A CSS class",
                    "A backend API"
                ],
                "answer": "A React component defined as a JavaScript function"
            },
            {
                "question": "What hook allows you to add state to a functional component?",
                "options": [
                    "useState",
                    "useEffect",
                    "useContext",
                    "useRef"
                ],
                "answer": "useState"
            },
            {
                "question": "How do you pass data from a parent component to a child component?",
                "options": [
                    "Using props",
                    "Using localStorage",
                    "Using cookies",
                    "Using state only"
                ],
                "answer": "Using props"
            },
            {
                "question": "What is the purpose of the `render()` method in class components?",
                "options": [
                    "To return the JSX to be displayed",
                    "To update the component's state",
                    "To pass data between components",
                    "To fetch data from APIs"
                ],
                "answer": "To return the JSX to be displayed"
            },
            {
                "question": "What is the difference between state and props?",
                "options": [
                    "State is managed within the component, props are passed from parent",
                    "Props change over time, state is fixed",
                    "State is read-only, props can be changed",
                    "There is no difference"
                ],
                "answer": "State is managed within the component, props are passed from parent"
            },
            {
                "question": "Which method updates the component’s state in class components?",
                "options": [
                    "this.setState()",
                    "this.updateState()",
                    "setState()",
                    "updateState()"
                ],
                "answer": "this.setState()"
            },
            {
                "question": "What is the virtual DOM?",
                "options": [
                    "A lightweight copy of the real DOM used by React to optimize updates",
                    "The browser's DOM",
                    "A database for storing components",
                    "A CSS rendering engine"
                ],
                "answer": "A lightweight copy of the real DOM used by React to optimize updates"
            },
            {
                "question": "How do you handle events in React?",
                "options": [
                    "By using camelCase event handlers like onClick",
                    "By using lowercase event names",
                    "By adding event listeners directly to DOM",
                    "By writing event code in CSS"
                ],
                "answer": "By using camelCase event handlers like onClick"
            },
            {
                "question": "What does the `useEffect` hook do?",
                "options": [
                    "Allows you to perform side effects like data fetching or subscriptions",
                    "Manages component state",
                    "Creates reusable components",
                    "Passes data between components"
                ],
                "answer": "Allows you to perform side effects like data fetching or subscriptions"
            },
            {
                "question": "How can you conditionally render elements in React?",
                "options": [
                    "Using JavaScript conditional expressions inside JSX",
                    "Using only CSS",
                    "By changing the HTML files",
                    "Using browser plugins"
                ],
                "answer": "Using JavaScript conditional expressions inside JSX"
            },
            {
                "question": "What does `key` prop do in lists?",
                "options": [
                    "Helps React identify which items have changed, are added, or removed",
                    "Adds CSS styles",
                    "Creates new components",
                    "Stores data in localStorage"
                ],
                "answer": "Helps React identify which items have changed, are added, or removed"
            },
            {
                "question": "Which hook is used to access the context value in React?",
                "options": [
                    "useContext",
                    "useState",
                    "useReducer",
                    "useEffect"
                ],
                "answer": "useContext"
            },
            {
                "question": "What does lifting state up mean?",
                "options": [
                    "Moving state to a common parent component to share data between children",
                    "Deleting state from components",
                    "Saving state to localStorage",
                    "Using Redux for state management"
                ],
                "answer": "Moving state to a common parent component to share data between children"
            },
            {
                "question": "Which React method prevents the default behavior of an event?",
                "options": [
                    "event.preventDefault()",
                    "event.stopPropagation()",
                    "event.default()",
                    "event.block()"
                ],
                "answer": "event.preventDefault()"
            },
            {
                "question": "How do you create a React app using create-react-app?",
                "options": [
                    "By running `npx create-react-app app-name`",
                    "By manually creating files",
                    "By downloading from the internet",
                    "By using npm start only"
                ],
                "answer": "By running `npx create-react-app app-name`"
            },
            {
                "question": "What is a controlled component in React?",
                "options": [
                    "An input form element whose value is controlled by React state",
                    "An element controlled by the browser",
                    "A component that cannot change",
                    "A component with no props"
                ],
                "answer": "An input form element whose value is controlled by React state"
            },
            {
                "question": "What is the difference between a class component and a functional component?",
                "options": [
                    "Class components use ES6 classes and lifecycle methods, functional components are simpler and can use hooks",
                    "Class components are faster",
                    "Functional components cannot have state",
                    "There is no difference"
                ],
                "answer": "Class components use ES6 classes and lifecycle methods, functional components are simpler and can use hooks"
            },
            {
                "question": "Which lifecycle method runs after the component mounts in class components?",
                "options": [
                    "componentDidMount",
                    "componentWillMount",
                    "render",
                    "componentDidUpdate"
                ],
                "answer": "componentDidMount"
            },
            {
                "question": "What is the default state value in useState?",
                "options": [
                    "The initial value passed to useState function",
                    "Always null",
                    "Always zero",
                    "Undefined"
                ],
                "answer": "The initial value passed to useState function"
            },
            {
                "question": "How can you optimize performance in React apps?",
                "options": [
                    "Using React.memo, useCallback, and lazy loading",
                    "Using more state",
                    "Adding more components",
                    "Increasing DOM elements"
                ],
                "answer": "Using React.memo, useCallback, and lazy loading"
            },
            {
                "question": "What does ReactDOM.render() do?",
                "options": [
                    "Renders React elements into the DOM",
                    "Updates component state",
                    "Fetches data from APIs",
                    "Creates components"
                ],
                "answer": "Renders React elements into the DOM"
            },
            {
                "question": "How do you prevent unnecessary re-renders in React?",
                "options": [
                    "By using React.memo and useCallback",
                    "By always updating state",
                    "By using more props",
                    "By not using keys"
                ],
                "answer": "By using React.memo and useCallback"
            },
            {
                "question": "What does `props.children` represent?",
                "options": [
                    "The content nested inside a component's opening and closing tags",
                    "A prop called children",
                    "An HTML attribute",
                    "A hook"
                ],
                "answer": "The content nested inside a component's opening and closing tags"
            },
            {
                "question": "What is the purpose of React.Fragment?",
                "options": [
                    "To group multiple elements without adding extra nodes to the DOM",
                    "To create a div wrapper",
                    "To style components",
                    "To manage state"
                ],
                "answer": "To group multiple elements without adding extra nodes to the DOM"
            },
            {
                "question": "How do you update state based on previous state in useState?",
                "options": [
                    "By passing a function to the state updater",
                    "By directly modifying the state",
                    "By calling setState multiple times",
                    "By using props"
                ],
                "answer": "By passing a function to the state updater"
            },
            {
                "question": "What will happen if you try to modify props inside a component?",
                "options": [
                    "React will warn because props are read-only",
                    "Props will update normally",
                    "Props become state automatically",
                    "No effect"
                ],
                "answer": "React will warn because props are read-only"
            },
            {
                "question": "Which hook would you use for managing complex state logic?",
                "options": [
                    "useReducer",
                    "useState",
                    "useEffect",
                    "useRef"
                ],
                "answer": "useReducer"
            },
            {
                "question": "What is a pure component?",
                "options": [
                    "A component that renders the same output for the same props and state",
                    "A component without props",
                    "A component that never re-renders",
                    "A component with side effects"
                ],
                "answer": "A component that renders the same output for the same props and state"
            },
            {
                "question": "How do you conditionally apply CSS classes in React?",
                "options": [
                    "Using JavaScript expressions inside className",
                    "Using inline styles only",
                    "By editing CSS files",
                    "By using HTML class attribute"
                ],
                "answer": "Using JavaScript expressions inside className"
            },
            {
                "question": "What is the purpose of keys in React lists?",
                "options": [
                    "To help React identify which items have changed, added, or removed",
                    "To style list items",
                    "To number list elements",
                    "To make lists scrollable"
                ],
                "answer": "To help React identify which items have changed, added, or removed"
            },
            {
                "question": "How do you create a reference to a DOM element in React?",
                "options": [
                    "Using useRef hook",
                    "Using document.getElementById",
                    "Using querySelector",
                    "Using getElementsByClassName"
                ],
                "answer": "Using useRef hook"
            },
            {
                "question": "What is React Strict Mode?",
                "options": [
                    "A tool for highlighting potential problems in an application",
                    "A styling mode",
                    "A production build option",
                    "A debugging tool for browser console"
                ],
                "answer": "A tool for highlighting potential problems in an application"
            },
            {
                "question": "How do you stop event propagation in React?",
                "options": [
                    "Using event.stopPropagation()",
                    "Using event.preventDefault()",
                    "By removing event listeners",
                    "Using event.cancel()"
                ],
                "answer": "Using event.stopPropagation()"
            },
            {
                "question": "What does the useEffect cleanup function do?",
                "options": [
                    "Cleans up side effects like subscriptions before the component unmounts or before running effect again",
                    "Deletes components",
                    "Updates state",
                    "Creates new components"
                ],
                "answer": "Cleans up side effects like subscriptions before the component unmounts or before running effect again"
            },
            {
                "question": "How do you import a component in React?",
                "options": [
                    "Using ES6 import syntax, e.g. `import Component from './Component'`",
                    "Using require() only",
                    "By copying code",
                    "By linking HTML files"
                ],
                "answer": "Using ES6 import syntax, e.g. `import Component from './Component'`"
            },
            {
                "question": "Which of these is a React hook?",
                "options": [
                    "useState",
                    "setState",
                    "render",
                    "componentDidMount"
                ],
                "answer": "useState"
            },
            {
                "question": "What is the purpose of `ReactDOM.createRoot()` in React 18?",
                "options": [
                    "To enable concurrent rendering features",
                    "To create a new component",
                    "To start server-side rendering",
                    "To generate HTML templates"
                ],
                "answer": "To enable concurrent rendering features"
            },
            {
                "question": "What is the default behavior of forms in React if not prevented?",
                "options": [
                    "They submit and reload the page",
                    "They do nothing",
                    "They clear the form",
                    "They save data automatically"
                ],
                "answer": "They submit and reload the page"
            },
            {
                "question": "How do you memoize a function in React?",
                "options": [
                    "Using useCallback hook",
                    "Using useState",
                    "Using useEffect",
                    "Using React.memo"
                ],
                "answer": "Using useCallback hook"
            },
            {
                "question": "How can you create a default prop value for a component?",
                "options": [
                    "Using defaultProps property or default parameter values",
                    "Using state",
                    "Using hooks",
                    "By setting in CSS"
                ],
                "answer": "Using defaultProps property or default parameter values"
            },
            {
                "question": "What is the use of `React.memo`?",
                "options": [
                    "To memoize functional components and prevent unnecessary re-renders",
                    "To manage state",
                    "To create refs",
                    "To handle errors"
                ],
                "answer": "To memoize functional components and prevent unnecessary re-renders"
            },
            {
                "question": "What is the difference between controlled and uncontrolled components?",
                "options": [
                    "Controlled components have their state managed by React; uncontrolled components manage their own state",
                    "Controlled components are uncontrolled",
                    "Uncontrolled components use hooks",
                    "No difference"
                ],
                "answer": "Controlled components have their state managed by React; uncontrolled components manage their own state"
            },
            {
                "question": "What does lifting state up help to solve?",
                "options": [
                    "Sharing state between components",
                    "Creating more components",
                    "Styling components",
                    "Improving performance"
                ],
                "answer": "Sharing state between components"
            },
            {
                "question": "What is the main purpose of React Router?",
                "options": [
                    "To handle navigation and routing in single-page applications",
                    "To manage component state",
                    "To style pages",
                    "To fetch data"
                ],
                "answer": "To handle navigation and routing in single-page applications"
            },
            {
                "question": "How do you pass a callback function to a child component?",
                "options": [
                    "By passing it as a prop",
                    "By using state",
                    "By importing it",
                    "By global variables"
                ],
                "answer": "By passing it as a prop"
            },
            {
                "question": "Which attribute in JSX is used for HTML class names?",
                "options": [
                    "className",
                    "class",
                    "class-id",
                    "style"
                ],
                "answer": "className"
            },
            {
                "question": "What is the use of React DevTools?",
                "options": [
                    "To inspect React component hierarchy and state",
                    "To write React code",
                    "To style components",
                    "To deploy React apps"
                ],
                "answer": "To inspect React component hierarchy and state"
            },
            {
                "question": "How do you write comments inside JSX?",
                "options": [
                    "Using `{/* comment */}` syntax",
                    "Using `// comment`",
                    "Using `<!-- comment -->`",
                    "Using `/* comment */`"
                ],
                "answer": "Using `{/* comment */}` syntax"
            },
            {
                "question": "What is the purpose of keys in React?",
                "options": [
                    "To uniquely identify elements in a list for efficient re-rendering",
                    "To add styles",
                    "To store data",
                    "To create components"
                ],
                "answer": "To uniquely identify elements in a list for efficient re-rendering"
            },
            {
                "question": "What happens if you don’t specify a key in a list?",
                "options": [
                    "React will warn and re-render inefficiently",
                    "Nothing happens",
                    "The app crashes",
                    "Keys are not important"
                ],
                "answer": "React will warn and re-render inefficiently"
            },
            {
                "question": "What is the difference between React and ReactDOM?",
                "options": [
                    "React is the core library; ReactDOM deals with rendering to the DOM",
                    "They are the same",
                    "ReactDOM is for server rendering only",
                    "React is for routing"
                ],
                "answer": "React is the core library; ReactDOM deals with rendering to the DOM"
            },
            {
                "question": "What is the best place to fetch data in React functional components?",
                "options": [
                    "Inside useEffect hook",
                    "Inside render",
                    "Inside useState",
                    "Outside the component"
                ],
                "answer": "Inside useEffect hook"
            },
            {
                "question": "How do you define inline styles in JSX?",
                "options": [
                    "By passing an object to the style attribute",
                    "Using CSS classes",
                    "Using a style tag",
                    "Using strings"
                ],
                "answer": "By passing an object to the style attribute"
            },
            {
                "question": "What does React StrictMode do?",
                "options": [
                    "Helps find potential problems by running extra checks during development",
                    "Optimizes performance",
                    "Changes CSS styles",
                    "Deploys the app"
                ],
                "answer": "Helps find potential problems by running extra checks during development"
            },
            {
                "question": "Which hook can be used to access DOM elements directly?",
                "options": [
                    "useRef",
                    "useState",
                    "useEffect",
                    "useContext"
                ],
                "answer": "useRef"
            },
            {
                "question": "How do you prevent a form from submitting the default way in React?",
                "options": [
                    "By calling event.preventDefault() in the submit handler",
                    "By removing the submit button",
                    "By using CSS",
                    "By refreshing the page"
                ],
                "answer": "By calling event.preventDefault() in the submit handler"
            }
        ],
        intermediate: [
            {
                "question": "What is the difference between useEffect and useLayoutEffect?",
                "options": [
                    "useEffect runs after render, useLayoutEffect runs before the browser paints",
                    "useEffect runs before render, useLayoutEffect after",
                    "They both behave the same",
                    "useLayoutEffect is deprecated"
                ],
                "answer": "useEffect runs after render, useLayoutEffect runs before the browser paints"
            },
            {
                "question": "What is the purpose of useCallback hook?",
                "options": [
                    "To memoize functions to prevent unnecessary re-renders",
                    "To create state variables",
                    "To fetch data",
                    "To access DOM elements"
                ],
                "answer": "To memoize functions to prevent unnecessary re-renders"
            },
            {
                "question": "How does React’s Context API help in state management?",
                "options": [
                    "It allows sharing data across the component tree without passing props manually",
                    "It replaces Redux",
                    "It manages local component state",
                    "It manages side effects"
                ],
                "answer": "It allows sharing data across the component tree without passing props manually"
            },
            {
                "question": "What is the use of the useReducer hook?",
                "options": [
                    "To manage complex state logic similar to Redux reducer",
                    "To handle side effects",
                    "To memoize values",
                    "To create refs"
                ],
                "answer": "To manage complex state logic similar to Redux reducer"
            },
            {
                "question": "How do you optimize rendering of a list of items in React?",
                "options": [
                    "By using unique keys and React.memo for list items",
                    "By not using keys",
                    "By avoiding lists",
                    "By using class components"
                ],
                "answer": "By using unique keys and React.memo for list items"
            },
            {
                "question": "What is the role of React.memo?",
                "options": [
                    "It memoizes a functional component to avoid unnecessary re-renders",
                    "It creates a new component",
                    "It adds state to functional components",
                    "It replaces useEffect"
                ],
                "answer": "It memoizes a functional component to avoid unnecessary re-renders"
            },
            {
                "question": "How do you handle errors in React components?",
                "options": [
                    "Using Error Boundaries",
                    "Using try-catch in render",
                    "Using state only",
                    "Using CSS"
                ],
                "answer": "Using Error Boundaries"
            },
            {
                "question": "Which lifecycle methods can be replaced by useEffect in functional components?",
                "options": [
                    "componentDidMount, componentDidUpdate, componentWillUnmount",
                    "render only",
                    "shouldComponentUpdate",
                    "componentWillReceiveProps"
                ],
                "answer": "componentDidMount, componentDidUpdate, componentWillUnmount"
            },
            {
                "question": "What does useImperativeHandle hook do?",
                "options": [
                    "Customizes the instance value exposed when using refs",
                    "Manages state",
                    "Performs side effects",
                    "Fetches data"
                ],
                "answer": "Customizes the instance value exposed when using refs"
            },
            {
                "question": "What’s the difference between controlled and uncontrolled components?",
                "options": [
                    "Controlled components have their state managed by React, uncontrolled use refs",
                    "Uncontrolled components have no value",
                    "Controlled components cannot update",
                    "There is no difference"
                ],
                "answer": "Controlled components have their state managed by React, uncontrolled use refs"
            },
            {
                "question": "How can you lazy load a React component?",
                "options": [
                    "Using React.lazy and Suspense",
                    "Using useState",
                    "Using useEffect",
                    "By importing normally"
                ],
                "answer": "Using React.lazy and Suspense"
            },
            {
                "question": "What does Suspense component do?",
                "options": [
                    "Allows showing fallback content while lazy components load",
                    "Handles state updates",
                    "Manages routing",
                    "Handles errors"
                ],
                "answer": "Allows showing fallback content while lazy components load"
            },
            {
                "question": "What is the purpose of the key attribute in React lists?",
                "options": [
                    "Helps React identify which items changed to optimize rendering",
                    "Adds styling",
                    "Controls form input",
                    "Triggers events"
                ],
                "answer": "Helps React identify which items changed to optimize rendering"
            },
            {
                "question": "What is a higher-order component (HOC)?",
                "options": [
                    "A function that takes a component and returns a new component",
                    "A React hook",
                    "A class component",
                    "A style wrapper"
                ],
                "answer": "A function that takes a component and returns a new component"
            },
            {
                "question": "Which hook would you use to store a mutable value that does not cause re-render?",
                "options": [
                    "useRef",
                    "useState",
                    "useEffect",
                    "useMemo"
                ],
                "answer": "useRef"
            },
            {
                "question": "How do you prevent a component from re-rendering when its props haven't changed?",
                "options": [
                    "Wrap it with React.memo",
                    "Use useState",
                    "Use useEffect",
                    "Use inline styles"
                ],
                "answer": "Wrap it with React.memo"
            },
            {
                "question": "What is the difference between useMemo and useCallback?",
                "options": [
                    "useMemo memoizes values, useCallback memoizes functions",
                    "They do the same",
                    "useMemo memoizes functions, useCallback memoizes values",
                    "Neither memoizes anything"
                ],
                "answer": "useMemo memoizes values, useCallback memoizes functions"
            },
            {
                "question": "How does React handle reconciliation?",
                "options": [
                    "By comparing the new virtual DOM with the old one and updating only changed parts",
                    "By reloading the entire DOM",
                    "By re-rendering everything",
                    "By using CSS"
                ],
                "answer": "By comparing the new virtual DOM with the old one and updating only changed parts"
            },
            {
                "question": "What are refs used for in React?",
                "options": [
                    "Accessing DOM elements or storing mutable variables",
                    "Managing state",
                    "Fetching data",
                    "Styling components"
                ],
                "answer": "Accessing DOM elements or storing mutable variables"
            },
            {
                "question": "What’s the difference between shallow rendering and full rendering in testing React components?",
                "options": [
                    "Shallow rendering renders only one level deep; full rendering renders child components too",
                    "They are the same",
                    "Full rendering is faster",
                    "Shallow rendering tests styles"
                ],
                "answer": "Shallow rendering renders only one level deep; full rendering renders child components too"
            },
            {
                "question": "What does the useLayoutEffect hook allow you to do?",
                "options": [
                    "Run side effects synchronously after all DOM mutations but before the browser paints",
                    "Run asynchronous code after render",
                    "Manage state",
                    "Fetch data"
                ],
                "answer": "Run side effects synchronously after all DOM mutations but before the browser paints"
            },
            {
                "question": "How do you memoize a component so it only re-renders when props change?",
                "options": [
                    "Using React.memo with an optional comparison function",
                    "Using useEffect",
                    "Using useState",
                    "Using class components"
                ],
                "answer": "Using React.memo with an optional comparison function"
            },
            {
                "question": "How do you perform side effects in a React functional component?",
                "options": [
                    "Using the useEffect hook",
                    "Using useState",
                    "Using props",
                    "Using useRef"
                ],
                "answer": "Using the useEffect hook"
            },
            {
                "question": "What is React Fiber?",
                "options": [
                    "React’s reconciliation algorithm for better rendering performance",
                    "A CSS framework",
                    "A state management library",
                    "A component lifecycle method"
                ],
                "answer": "React’s reconciliation algorithm for better rendering performance"
            },
            {
                "question": "What’s the purpose of useMemo hook?",
                "options": [
                    "Memoizing expensive calculations to avoid recomputation",
                    "Managing state",
                    "Fetching data",
                    "Handling events"
                ],
                "answer": "Memoizing expensive calculations to avoid recomputation"
            },
            {
                "question": "What happens if you call setState inside useEffect without dependency array?",
                "options": [
                    "It causes an infinite loop of renders",
                    "It updates state once",
                    "It does nothing",
                    "It breaks the app"
                ],
                "answer": "It causes an infinite loop of renders"
            },
            {
                "question": "What is the purpose of the dependency array in useEffect?",
                "options": [
                    "To control when the effect runs based on changes to dependencies",
                    "To store data",
                    "To memoize components",
                    "To update state"
                ],
                "answer": "To control when the effect runs based on changes to dependencies"
            },
            {
                "question": "How can you pass props to a component rendered by React Router?",
                "options": [
                    "Using the render or element prop with a function",
                    "Using state only",
                    "Using context only",
                    "By editing the component"
                ],
                "answer": "Using the render or element prop with a function"
            },
            {
                "question": "What is prop drilling?",
                "options": [
                    "Passing props through many layers of components unnecessarily",
                    "Using props only once",
                    "Passing state instead of props",
                    "Not passing props at all"
                ],
                "answer": "Passing props through many layers of components unnecessarily"
            },
            {
                "question": "How can you avoid prop drilling?",
                "options": [
                    "Using React Context API or state management libraries",
                    "Passing props everywhere",
                    "Using more state",
                    "Using CSS"
                ],
                "answer": "Using React Context API or state management libraries"
            },
            {
                "question": "How do you force a React component to re-render?",
                "options": [
                    "By changing its state or props",
                    "By calling render manually",
                    "By refreshing the page",
                    "By calling setState directly"
                ],
                "answer": "By changing its state or props"
            },
            {
                "question": "What is the difference between React.lazy and dynamic import()?",
                "options": [
                    "React.lazy wraps dynamic import to load components lazily",
                    "They are unrelated",
                    "dynamic import is for CSS only",
                    "React.lazy is a hook"
                ],
                "answer": "React.lazy wraps dynamic import to load components lazily"
            },
            {
                "question": "What is the significance of the React key prop?",
                "options": [
                    "It uniquely identifies elements to help React optimize rendering",
                    "It adds CSS styles",
                    "It stores data",
                    "It creates new components"
                ],
                "answer": "It uniquely identifies elements to help React optimize rendering"
            },
            {
                "question": "How can you update multiple state variables in React at once?",
                "options": [
                    "By calling setState or useState multiple times or using a state object",
                    "By refreshing the page",
                    "By passing props",
                    "By using useEffect"
                ],
                "answer": "By calling setState or useState multiple times or using a state object"
            },
            {
                "question": "What is the benefit of using a key in a list over using index as key?",
                "options": [
                    "Using unique keys avoids rendering bugs when list items reorder",
                    "Index is always better",
                    "No difference",
                    "Keys slow down rendering"
                ],
                "answer": "Using unique keys avoids rendering bugs when list items reorder"
            },
            {
                "question": "How do you handle asynchronous operations in React?",
                "options": [
                    "Using useEffect and async functions or Promises",
                    "Using useState only",
                    "Using props only",
                    "Using CSS"
                ],
                "answer": "Using useEffect and async functions or Promises"
            },
            {
                "question": "What is a custom React hook?",
                "options": [
                    "A reusable function that uses React hooks to share logic",
                    "A built-in React function",
                    "A class component",
                    "A CSS feature"
                ],
                "answer": "A reusable function that uses React hooks to share logic"
            },
            {
                "question": "How does React handle event handling differently than HTML?",
                "options": [
                    "React uses synthetic events for cross-browser compatibility",
                    "React uses native events only",
                    "Events are handled by CSS",
                    "There is no difference"
                ],
                "answer": "React uses synthetic events for cross-browser compatibility"
            },
            {
                "question": "Which hook lets you subscribe to context in functional components?",
                "options": [
                    "useContext",
                    "useReducer",
                    "useState",
                    "useEffect"
                ],
                "answer": "useContext"
            },
            {
                "question": "What is the use of React.StrictMode?",
                "options": [
                    "To highlight potential problems during development",
                    "To optimize production builds",
                    "To handle routing",
                    "To add styles"
                ],
                "answer": "To highlight potential problems during development"
            },
            {
                "question": "What does the useDebugValue hook do?",
                "options": [
                    "Displays a label for custom hooks in React DevTools",
                    "Updates state",
                    "Fetches data",
                    "Handles events"
                ],
                "answer": "Displays a label for custom hooks in React DevTools"
            },
            {
                "question": "How do you conditionally render components in React?",
                "options": [
                    "Using JavaScript conditional operators inside JSX",
                    "Using CSS only",
                    "Using loops only",
                    "By editing HTML"
                ],
                "answer": "Using JavaScript conditional operators inside JSX"
            },
            {
                "question": "How do you prevent a React component from updating when its props change?",
                "options": [
                    "By wrapping it in React.memo with a custom comparison function",
                    "By not passing props",
                    "By using useEffect",
                    "By using CSS"
                ],
                "answer": "By wrapping it in React.memo with a custom comparison function"
            },
            {
                "question": "What does the setState function do in React class components?",
                "options": [
                    "It schedules an update to component state and triggers a re-render",
                    "It immediately updates the DOM",
                    "It deletes the component",
                    "It changes props"
                ],
                "answer": "It schedules an update to component state and triggers a re-render"
            },
            {
                "question": "What is the purpose of the second argument of useEffect?",
                "options": [
                    "It is a dependency array controlling when the effect runs",
                    "It is the cleanup function",
                    "It is the effect function",
                    "It sets state"
                ],
                "answer": "It is a dependency array controlling when the effect runs"
            },
            {
                "question": "How can you memoize expensive calculations in React?",
                "options": [
                    "Using useMemo hook",
                    "Using useState",
                    "Using useEffect",
                    "Using useRef"
                ],
                "answer": "Using useMemo hook"
            },
            {
                "question": "What’s the difference between React components created with class vs functional components?",
                "options": [
                    "Functional components use hooks, class components use lifecycle methods",
                    "There is no difference",
                    "Class components are deprecated",
                    "Functional components can’t use state"
                ],
                "answer": "Functional components use hooks, class components use lifecycle methods"
            },
            {
                "question": "Which hook would you use to manage global state with the Context API?",
                "options": [
                    "useContext",
                    "useState",
                    "useReducer",
                    "useEffect"
                ],
                "answer": "useContext"
            },
            {
                "question": "How do you handle forms in React?",
                "options": [
                    "By using controlled components and handling input changes with state",
                    "Using HTML forms only",
                    "By using refs only",
                    "By refreshing the page"
                ],
                "answer": "By using controlled components and handling input changes with state"
            },
            {
                "question": "What is the use of the dependency array in useEffect hook?",
                "options": [
                    "To specify when the effect should re-run",
                    "To store state",
                    "To memoize a function",
                    "To access DOM"
                ],
                "answer": "To specify when the effect should re-run"
            },
            {
                "question": "What is the purpose of defaultProps in React?",
                "options": [
                    "To set default values for props if none are passed",
                    "To define state",
                    "To handle events",
                    "To style components"
                ],
                "answer": "To set default values for props if none are passed"
            },
            {
                "question": "What is the significance of the shouldComponentUpdate lifecycle method?",
                "options": [
                    "It allows optimization by controlling when a component re-renders",
                    "It updates props",
                    "It fetches data",
                    "It handles errors"
                ],
                "answer": "It allows optimization by controlling when a component re-renders"
            },
            {
                "question": "How can you combine multiple useState hooks in a functional component?",
                "options": [
                    "Call useState separately for each piece of state",
                    "Use a single useState for all state",
                    "Use useReducer only",
                    "Use class components"
                ],
                "answer": "Call useState separately for each piece of state"
            },
            {
                "question": "What does useEffect cleanup function do?",
                "options": [
                    "Cleans up side effects like subscriptions or timers before the component unmounts or before next effect",
                    "Updates state",
                    "Fetches data",
                    "Renders the component"
                ],
                "answer": "Cleans up side effects like subscriptions or timers before the component unmounts or before next effect"
            },
            {
                "question": "What is the use of propTypes in React?",
                "options": [
                    "To validate props passed to components",
                    "To set default props",
                    "To style components",
                    "To manage state"
                ],
                "answer": "To validate props passed to components"
            },
            {
                "question": "What is the advantage of functional components over class components?",
                "options": [
                    "Simpler syntax and better support for hooks",
                    "They have state by default",
                    "They are faster always",
                    "They don’t re-render"
                ],
                "answer": "Simpler syntax and better support for hooks"
            },
            {
                "question": "How do you share logic between two React functional components?",
                "options": [
                    "Using custom hooks",
                    "Using classes",
                    "Using props only",
                    "Using CSS"
                ],
                "answer": "Using custom hooks"
            },
            {
                "question": "What is the purpose of the useRef hook?",
                "options": [
                    "To persist a mutable value between renders without causing re-render",
                    "To create state",
                    "To handle side effects",
                    "To memoize functions"
                ],
                "answer": "To persist a mutable value between renders without causing re-render"
            },
            {
                "question": "What is the difference between props and state?",
                "options": [
                    "Props are passed from parent, state is managed internally",
                    "State is immutable, props are mutable",
                    "Both are the same",
                    "Props manage local data"
                ],
                "answer": "Props are passed from parent, state is managed internally"
            },
            {
                "question": "How can you optimize React app performance?",
                "options": [
                    "Using React.memo, useMemo, useCallback, and avoiding unnecessary renders",
                    "Using CSS",
                    "Avoiding hooks",
                    "Using class components only"
                ],
                "answer": "Using React.memo, useMemo, useCallback, and avoiding unnecessary renders"
            }
        ],
        advanced: [
            {
                "question": "What is the difference between `useEffect` and `useLayoutEffect` in React functional components?",
                "options": [
                    "useEffect runs after render and paint; useLayoutEffect runs after render but before browser paint",
                    "useEffect runs synchronously; useLayoutEffect runs asynchronously",
                    "They behave identically",
                    "useLayoutEffect is deprecated"
                ],
                "answer": "useEffect runs after render and paint; useLayoutEffect runs after render but before browser paint"
            },
            {
                "question": "Which hook would you use to memoize a callback function so it doesn’t change unless its dependencies do?",
                "options": [
                    "useCallback",
                    "useMemo",
                    "useRef",
                    "useState"
                ],
                "answer": "useCallback"
            },
            {
                "question": "Which hook is best suited for memoizing an expensive computed value?",
                "options": [
                    "useMemo",
                    "useCallback",
                    "useState",
                    "useEffect"
                ],
                "answer": "useMemo"
            },
            {
                "question": "What is the purpose of `useImperativeHandle` when used with `forwardRef`?",
                "options": [
                    "To customize the instance value a parent ref receives from a child component",
                    "To manage state internal to a component",
                    "To fetch data from an API",
                    "To replace useEffect entirely"
                ],
                "answer": "To customize the instance value a parent ref receives from a child component"
            },
            {
                "question": "What does the `useReducer` hook provide over a series of `useState` calls?",
                "options": [
                    "A way to manage complex state transitions using a reducer and actions",
                    "Faster rendering automatically",
                    "Only works with class components",
                    "Replaces useEffect"
                ],
                "answer": "A way to manage complex state transitions using a reducer and actions"
            },
            {
                "question": "Why might you split context providers when using the Context API for global state?",
                "options": [
                    "To avoid re‑rendering all consumers when part of the state changes",
                    "To combine all state into one provider for simplicity",
                    "Because it’s required by React",
                    "To avoid using hooks"
                ],
                "answer": "To avoid re‑rendering all consumers when part of the state changes"
            },
            {
                "question": "What is the benefit of using `React.memo` around a component?",
                "options": [
                    "It prevents unnecessary re‑renders when props haven’t changed",
                    "It converts a functional component into a class component",
                    "It disables state updates",
                    "It automatically handles side effects"
                ],
                "answer": "It prevents unnecessary re‑renders when props haven’t changed"
            },
            {
                "question": "In React 18+, what is the purpose of `createRoot()` instead of `ReactDOM.render()`?",
                "options": [
                    "To enable concurrent (or automatic batching) features",
                    "To deprecate functional components",
                    "To disable hooks",
                    "To render only class components"
                ],
                "answer": "To enable concurrent (or automatic batching) features"
            },
            {
                "question": "What is a Compound Component pattern in React?",
                "options": [
                    "A pattern where a parent component provides context and child components consume it to share state/behaviour",
                    "A component that mixes class and functional syntax",
                    "A component that contains two unrelated parts",
                    "Only used in class components"
                ],
                "answer": "A pattern where a parent component provides context and child components consume it to share state/behaviour"
            },
            {
                "question": "Why would you use `useDeferredValue` or `startTransition` in React?",
                "options": [
                    "To defer less‑important updates so more urgent ones can proceed, improving UX in concurrent mode",
                    "To fetch data",
                    "To replace useEffect completely",
                    "To disable hooks"
                ],
                "answer": "To defer less‑important updates so more urgent ones can proceed, improving UX in concurrent mode"
            },
            {
                "question": "What is the difference between passing a function vs passing a non‑memoized object/array as a prop in React?",
                "options": [
                    "Non‑memoized objects/arrays change reference each render, causing child components to re‑render; memoizing prevents this",
                    "No difference",
                    "Passing functions always triggers re‑render",
                    "Passing objects/arrays stops rendering"
                ],
                "answer": "Non‑memoized objects/arrays change reference each render, causing child components to re‑render; memoizing prevents this"
            },
            {
                "question": "What is the use of `useId` hook?",
                "options": [
                    "To generate stable unique IDs for accessibility or SSR hydration",
                    "To replace keys in lists",
                    "To fetch remote IDs",
                    "To manage state"
                ],
                "answer": "To generate stable unique IDs for accessibility or SSR hydration"
            },
            {
                "question": "In what scenario is `useLayoutEffect` preferable over `useEffect`?",
                "options": [
                    "When you need to measure DOM layout or synchronously apply changes before browser paints",
                    "To fetch data asynchronously",
                    "To manage remote events only",
                    "Never use `useLayoutEffect`"
                ],
                "answer": "When you need to measure DOM layout or synchronously apply changes before browser paints"
            },
            {
                "question": "What is the “render props” pattern and why is it less common in modern React?",
                "options": [
                    "A pattern where a prop is a function that returns UI; less common because hooks and custom hooks provide more direct logic reuse",
                    "A CSS styling method",
                    "Only works with class components",
                    "Automatically optimizes performance"
                ],
                "answer": "A pattern where a prop is a function that returns UI; less common because hooks and custom hooks provide more direct logic reuse"
            },
            {
                "question": "How can you avoid expensive re‑calculations inside a React component on every render?",
                "options": [
                    "By using `useMemo` to memoize the calculation result based on dependencies",
                    "By using `useState` alone",
                    "By using `setTimeout`",
                    "By using CSS only"
                ],
                "answer": "By using `useMemo` to memoize the calculation result based on dependencies"
            },
            {
                "question": "What is a “Controlled vs Uncontrolled” component in React forms?",
                "options": [
                    "Controlled components have their state managed by React; uncontrolled components maintain their own internal state (refs)",
                    "Controlled components cannot change",
                    "Uncontrolled components are invalid",
                    "They are the same thing"
                ],
                "answer": "Controlled components have their state managed by React; uncontrolled components maintain their own internal state (refs)"
            },
            {
                "question": "What is the time complexity benefit of using keys properly in lists rather than indexes as keys?",
                "options": [
                    "Using stable unique keys prevents unnecessary reordering, reuse, and avoids rendering mismatches",
                    "Indexes are always better for performance",
                    "Keys only affect styling",
                    "No benefit"
                ],
                "answer": "Using stable unique keys prevents unnecessary reordering, reuse, and avoids rendering mismatches"
            },
            {
                "question": "What does `useDebugValue` hook do?",
                "options": [
                    "Provides a label for custom hooks which helps in React DevTools debugging",
                    "Updates state automatically",
                    "Handles side effects",
                    "Creates refs"
                ],
                "answer": "Provides a label for custom hooks which helps in React DevTools debugging"
            },
            {
                "question": "What are React Server Components (RSC) and how are they changing front‑end architecture?",
                "options": [
                    "Components that run on the server and send down UI to the client, reducing bundle size and improving performance",
                    "Same as SSR only",
                    "Only usable in class components",
                    "Deprecated"
                ],
                "answer": "Components that run on the server and send down UI to the client, reducing bundle size and improving performance"
            },
            {
                "question": "When should you consider code splitting in React, and how?",
                "options": [
                    "When large bundles or rarely used parts exist; split via `React.lazy`, `Suspense`, and dynamic `import()`",
                    "Only when using class components",
                    "When no state is present",
                    "Never"
                ],
                "answer": "When large bundles or rarely used parts exist; split via `React.lazy`, `Suspense`, and dynamic `import()`"
            },
            {
                "question": "What is the “Compound Components” pattern and how does it improve API design?",
                "options": [
                    "It allows you to build a set of inter‑related components that share internal state/context for flexibility and composability",
                    "It uses multiple HOCs stacked together",
                    "It enforces global state only",
                    "It is purely for styling"
                ],
                "answer": "It allows you to build a set of inter‑related components that share internal state/context for flexibility and composability"
            },
            {
                "question": "What is the role of React Profiler in optimizing performance?",
                "options": [
                    "To analyze renders and identify performance bottlenecks (e.g., unnecessary renders or slow components)",
                    "To style components",
                    "To deploy apps",
                    "To manage state"
                ],
                "answer": "To analyze renders and identify performance bottlenecks (e.g., unnecessary renders or slow components)"
            },
            {
                "question": "What is the “Stale Closure” problem in React hooks and how can you avoid it?",
                "options": [
                    "When a hook captures outdated state/props because dependencies weren't included; avoid by listing correct dependencies or using refs",
                    "When a component never updates",
                    "When useState fails",
                    "When useReducer fails"
                ],
                "answer": "When a hook captures outdated state/props because dependencies weren't included; avoid by listing correct dependencies or using refs"
            },
            {
                "question": "How can `useTransition` improve user experience in React?",
                "options": [
                    "It marks updates as non‑urgent so the UI remains responsive while those updates complete",
                    "It deletes state",
                    "It disables hooks",
                    "It replaces useEffect"
                ],
                "answer": "It marks updates as non‑urgent so the UI remains responsive while those updates complete"
            },
            {
                "question": "What is React’s Concurrent Mode (or Concurrent Features) and why is it significant?",
                "options": [
                    "It allows React to interrupt rendering and prioritize urgent updates, improving responsiveness and scalability",
                    "It only works with class components",
                    "It slows down apps",
                    "It is deprecated"
                ],
                "answer": "It allows React to interrupt rendering and prioritize urgent updates, improving responsiveness and scalability"
            },
            {
                "question": "Why is it important to memoize context value objects passed via Context.Provider?",
                "options": [
                    "Because if the object changes reference each render, all consumers will re‑render unnecessarily",
                    "Context doesn’t re‑render children",
                    "Objects always memoize automatically",
                    "Not important"
                ],
                "answer": "Because if the object changes reference each render, all consumers will re‑render unnecessarily"
            },
            {
                "question": "What is a “render prop” and how does it differ from a custom hook?",
                "options": [
                    "Render prop passes a function as child or prop to render UI; custom hook shares logic without altering component tree structure",
                    "Render prop is a hook",
                    "Custom hook is only for class components",
                    "They’re the same"
                ],
                "answer": "Render prop passes a function as child or prop to render UI; custom hook shares logic without altering component tree structure"
            },
            {
                "question": "What are the pitfalls of using an index as a key in a list in React?",
                "options": [
                    "If list items reorder, indexes may cause wrong mapping, leading to UI bugs and performance issues",
                    "It is always fine",
                    "Only matters for styling",
                    "Only for performance, not behaviour"
                ],
                "answer": "If list items reorder, indexes may cause wrong mapping, leading to UI bugs and performance issues"
            },
            {
                "question": "What is “prop drilling” and how can you avoid it in React applications?",
                "options": [
                    "Prop drilling is passing props through many layers; avoid by using Context API or other state management",
                    "It is passing state only",
                    "It is only for styling props",
                    "It cannot be avoided"
                ],
                "answer": "Prop drilling is passing props through many layers; avoid by using Context API or other state management"
            },
            {
                "question": "How does lazy initialization of state via `useState(() => initialValue)` help performance?",
                "options": [
                    "It ensures the initial value is computed only once and not on every render",
                    "It prevents state updates",
                    "It is the same as `useState(initialValue)`",
                    "It slows down rendering"
                ],
                "answer": "It ensures the initial value is computed only once and not on every render"
            },
            {
                "question": "What is a “higher‑order component” (HOC) in React, and when might you still use one?",
                "options": [
                    "A function that takes a component and returns a new component adding extra behaviour; useful for cross‑cutting concerns or legacy code",
                    "It is a hook",
                    "It is the same as a render prop",
                    "Only for styling"
                ],
                "answer": "A function that takes a component and returns a new component adding extra behaviour; useful for cross‑cutting concerns or legacy code"
            },
            {
                "question": "How can you implement a “controlled component” that can also be used as “uncontrolled” (i.e., support both)?",
                "options": [
                    "Use a value prop + onChange, and fallback to internal state when value is undefined (controlled/uncontrolled hybrid)",
                    "Always use uncontrolled only",
                    "Always use controlled only",
                    "It is impossible"
                ],
                "answer": "Use a value prop + onChange, and fallback to internal state when value is undefined (controlled/uncontrolled hybrid)"
            },
            {
                "question": "What technique can you use to monitor render performance and detect performance bottlenecks in React?",
                "options": [
                    "Use the React Profiler, performance marks, and custom hooks to log render times",
                    "Use console.log only",
                    "Use CSS transitions",
                    "Not needed"
                ],
                "answer": "Use the React Profiler, performance marks, and custom hooks to log render times"
            },
            {
                "question": "Why is it recommended to avoid writing hooks inside loops, conditions, or nested functions?",
                "options": [
                    "Because hooks rely on consistent call order between renders and violating that causes bugs",
                    "Because loops are slower",
                    "Because conditions always break React",
                    "There is no issue"
                ],
                "answer": "Because hooks rely on consistent call order between renders and violating that causes bugs"
            },
            {
                "question": "How can you implement error boundaries in functional components?",
                "options": [
                    "Currently via class components only; use third‑party solutions or React 18+ `<ErrorBoundary>` wrapper",
                    "Use useEffect",
                    "Use useState only",
                    "Use CSS"
                ],
                "answer": "Currently via class components only; use third‑party solutions or React 18+ `<ErrorBoundary>` wrapper"
            },
            {
                "question": "What is the purpose of `useRef` when used for storing previous props or state?",
                "options": [
                    "It stores a mutable value that persists through renders without triggering a re‑render",
                    "It updates state automatically",
                    "It triggers hooks",
                    "It replaces useState"
                ],
                "answer": "It stores a mutable value that persists through renders without triggering a re‑render"
            },
            {
                "question": "How does async rendering in React (e.g., Concurrent Mode) affect how you should write side‑effects and state updates?",
                "options": [
                    "You must avoid assumptions about sync order and write side‑effects safely (e.g., no unmounted component updates, use `startTransition`, cancellation, etc.)",
                    "Everything is synchronous as usual",
                    "It doesn’t affect anything",
                    "State updates are blocked"
                ],
                "answer": "You must avoid assumptions about sync order and write side‑effects safely (e.g., no unmounted component updates, use `startTransition`, cancellation, etc.)"
            },
            {
                "question": "What are “islands architecture” or “partial hydration” patterns in React SSR/modern frameworks and why are they important?",
                "options": [
                    "They hydrate only parts of the UI that need interactivity, reducing JS bundle size and improving performance",
                    "They hydrate everything at once",
                    "They replace server components entirely",
                    "They are only for class components"
                ],
                "answer": "They hydrate only parts of the UI that need interactivity, reducing JS bundle size and improving performance"
            },
            {
                "question": "What is the significance of `key` prop stability in dynamic lists and animations?",
                "options": [
                    "Stable keys preserve element identity across renders, enabling efficient reconciliation and preserving state/animations",
                    "Keys only affect styling",
                    "Keys are optional always",
                    "Index keys are just as stable"
                ],
                "answer": "Stable keys preserve element identity across renders, enabling efficient reconciliation and preserving state/animations"
            },
            {
                "question": "What is the pattern of “Render Prop vs Hook vs HOC” and when should you choose a hook instead of a render prop or HOC?",
                "options": [
                    "Hooks provide shared logic without changing component tree; render props/HOCs wrap components and change tree; choose hooks for simpler logic reuse",
                    "Hooks are slower",
                    "HOCs are future only",
                    "Render props always better"
                ],
                "answer": "Hooks provide shared logic without changing component tree; render props/HOCs wrap components and change tree; choose hooks for simpler logic reuse"
            },
            {
                "question": "How do you manage “expensive updates” such as list sorting, filtering or computations in React to avoid blocking UI?",
                "options": [
                    "Use `useMemo`, `useCallback`, `startTransition`, lazy loading, virtualization and avoid blocking main thread",
                    "Use setTimeout only",
                    "Avoid updates entirely",
                    "Use synchronous loops only"
                ],
                "answer": "Use `useMemo`, `useCallback`, `startTransition`, lazy loading, virtualization and avoid blocking main thread"
            },
            {
                "question": "Why is memoizing every function or value with `useMemo`/`useCallback` not always a win?",
                "options": [
                    "Because memoization has its own cost; if dependencies change often or component simple, it can hurt performance rather than help",
                    "Because useMemo doesn’t work",
                    "Because hooks are broken",
                    "Because only class components benefit"
                ],
                "answer": "Because memoization has its own cost; if dependencies change often or component simple, it can hurt performance rather than help"
            },
            {
                "question": "How can you implement a retry mechanism for data fetching in React applications?",
                "options": [
                    "Using a custom hook that wraps fetch logic with retries and exposes loading/error/data state",
                    "Using useState only",
                    "By using class components only",
                    "By using CSS animation"
                ],
                "answer": "Using a custom hook that wraps fetch logic with retries and exposes loading/error/data state"
            },
            {
                "question": "What is the advantage of creating a “presentational + container” component split in React architecture?",
                "options": [
                    "Separation of concerns: UI vs logic/data; easier testing and reuse",
                    "It is required by React",
                    "It only applies to class components",
                    "It replaces hooks"
                ],
                "answer": "Separation of concerns: UI vs logic/data; easier testing and reuse"
            },
            {
                "question": "What does the term “reactive programming” in the context of React mean?",
                "options": [
                    "Designing components and state so UI reacts to changes automatically and declaratively",
                    "Using RxJS only",
                    "Using class components only",
                    "Writing imperative DOM code"
                ],
                "answer": "Designing components and state so UI reacts to changes automatically and declaratively"
            },
            {
                "question": "How do you avoid memory leaks with async effects in React components?",
                "options": [
                    "By cancelling subscriptions/requests in cleanup, checking mounted state before updating state",
                    "By never using async",
                    "By using setTimeout always",
                    "By unmounting manually"
                ],
                "answer": "By cancelling subscriptions/requests in cleanup, checking mounted state before updating state"
            },
            {
                "question": "What are the considerations when designing a large‑scale React application architecture regarding state management and data flow?",
                "options": [
                    "Avoid monolithic components, use modular state (Context + reducer or state library), evaluate data fetching strategy, code splitting and performance budgets",
                    "Use only one global state object",
                    "Use only local component state everywhere",
                    "Avoid lazy loading"
                ],
                "answer": "Avoid monolithic components, use modular state (Context + reducer or state library), evaluate data fetching strategy, code splitting and performance budgets"
            },
            {
                "question": "What is “time‑slicing” in React’s concurrent rendering architecture?",
                "options": [
                    "A technique where React breaks work into chunks allowing user input to interrupt long renders",
                    "A CSS animation schedule",
                    "Only for class components",
                    "Deprecated"
                ],
                "answer": "A technique where React breaks work into chunks allowing user input to interrupt long renders"
            },
            {
                "question": "How can you implement optimistic UI updates in React applications?",
                "options": [
                    "Update UI immediately assuming success, keep track of pending state, rollback on error",
                    "Wait for server response before updating UI always",
                    "Use CSS transitions only",
                    "Use class components only"
                ],
                "answer": "Update UI immediately assuming success, keep track of pending state, rollback on error"
            },
            {
                "question": "What is the difference between “hydration” and “mounting” in the context of SSR with React?",
                "options": [
                    "Hydration attaches event listeners to existing server‑rendered markup; mounting creates DOM from scratch on client",
                    "They’re the same thing",
                    "Hydration only for class components",
                    "Hydration disables hooks"
                ],
                "answer": "Hydration attaches event listeners to existing server‑rendered markup; mounting creates DOM from scratch on client"
            },
            {
                "question": "When using `React.lazy` with `Suspense`, how do you handle error boundaries and loading fallbacks?",
                "options": [
                    "Wrap lazy component in `<Suspense fallback={...}>` and optionally an error boundary component",
                    "Use only fallback without error boundary",
                    "Lazy automatically handles errors",
                    "No fallback required"
                ],
                "answer": "Wrap lazy component in `<Suspense fallback={...}>` and optionally an error boundary component"
            },
            {
                "question": "What is the difference between client components and server components in React frameworks like Next.js 13+?",
                "options": [
                    "Server components run on the server, cannot use state/hooks like browser stuff; client components run on client and support interactivity",
                    "Only client components exist",
                    "Only server components exist",
                    "They behave identically"
                ],
                "answer": "Server components run on the server, cannot use state/hooks like browser stuff; client components run on client and support interactivity"
            },
            {
                "question": "Why is it important to batch state updates in React, and how is automatic batching improved in newer versions?",
                "options": [
                    "Batching reduces number of renders; React 18+ batches updates inside event handlers and async tasks automatically",
                    "Batching stops hooks from running",
                    "Only class components support batching",
                    "Batching isn’t important"
                ],
                "answer": "Batching reduces number of renders; React 18+ batches updates inside event handlers and async tasks automatically"
            },
            {
                "question": "Which strategy improves large lists or tables’ rendering performance in React?",
                "options": [
                    "Virtualization or windowing (e.g., react‑window, react‑virtualized) to only render visible elements",
                    "Render all items always",
                    "Use CSS only",
                    "Use class components only"
                ],
                "answer": "Virtualization or windowing (e.g., react‑window, react‑virtualized) to only render visible elements"
            },
            {
                "question": "When would you use `forwardRef` in React?",
                "options": [
                    "When you want parent to get a ref to a child DOM element or component instance",
                    "Only for class components",
                    "Only for styling",
                    "Never use it"
                ],
                "answer": "When you want parent to get a ref to a child DOM element or component instance"
            },
            {
                "question": "What is the concept of “Controlled vs Uncontrolled Animations” in React and how does it impact performance?",
                "options": [
                    "Controlled animations are driven by React state (can cause frequent renders); uncontrolled (via CSS or requestAnimationFrame) offload work to browser, potentially smoother",
                    "All animations controlled by React are slow",
                    "Animations cannot be uncontrolled",
                    "There is no difference"
                ],
                "answer": "Controlled animations are driven by React state (can cause frequent renders); uncontrolled (via CSS or requestAnimationFrame) offload work to browser, potentially smoother"
            },
            {
                "question": "How do you handle caching of fetched data in a React application for performance and UX?",
                "options": [
                    "Use libraries (e.g., React Query, SWR) or custom hooks to cache, invalidate, and re‑use data",
                    "Fetch each time always",
                    "Use only useState",
                    "Use CSS"
                ],
                "answer": "Use libraries (e.g., React Query, SWR) or custom hooks to cache, invalidate, and re‑use data"
            },
            {
                "question": "What does the `useSyncExternalStore` hook do?",
                "options": [
                    "Allows subscribing to external stores (e.g., custom state containers) in a way compatible with concurrent rendering",
                    "Replaces useState completely",
                    "Handles only DOM events",
                    "Is deprecated"
                ],
                "answer": "Allows subscribing to external stores (e.g., custom state containers) in a way compatible with concurrent rendering"
            },
            {
                "question": "What is the significance of “Idle Time Work” (such as `useIdleCallback`) when optimizing React apps?",
                "options": [
                    "Using idle time for non‑urgent tasks (analytics, logging, layout measuring) avoids blocking user‑interactive updates",
                    "Only for class components",
                    "It delays all updates",
                    "Not recommended"
                ],
                "answer": "Using idle time for non‑urgent tasks (analytics, logging, layout measuring) avoids blocking user‑interactive updates"
            },
            {
                "question": "What is the “Context Selector” pattern and why is it useful?",
                "options": [
                    "Selecting only part of context value via custom hooks to avoid re‑rendering all consumers when irrelevant value changes",
                    "Selecting context only in class components",
                    "Selecting context is same as useContext always",
                    "Not useful"
                ],
                "answer": "Selecting only part of context value via custom hooks to avoid re‑rendering all consumers when irrelevant value changes"
            },
            {
                "question": "How does the “Signal‑First” reactivity paradigm (emerging) differ from React’s state model and what might it imply for future React patterns?",
                "options": [
                    "Signals track fine‑grained dependencies automatically and can reduce unnecessary updates; React state is coarser; this suggests possible evolutions of React’s internal model",
                    "It is same as useState",
                    "It replaces hooks immediately",
                    "Not relevant to React"
                ],
                "answer": "Signals track fine‑grained dependencies automatically and can reduce unnecessary updates; React state is coarser; this suggests possible evolutions of React’s internal model"
            },
            {
                "question": "When would you use “controlled vs uncontrolled” concurrency features such as `useTransition`, `startTransition`, or `useDeferredValue`?",
                "options": [
                    "When you want to mark certain updates as non‑urgent (deferred) so that urgent updates (like input) remain responsive",
                    "Only for class components",
                    "They block updates always",
                    "They replace useEffect"
                ],
                "answer": "When you want to mark certain updates as non‑urgent (deferred) so that urgent updates (like input) remain responsive"
            },
            {
                "question": "What is the “Module Federation” pattern in front‑end apps (including React) and why is it relevant for large teams?",
                "options": [
                    "Allows independent teams to load parts (micro‑frontends) at runtime via webpack, sharing React dependencies and enabling scalable codebases",
                    "Only for backend",
                    "Replaces Context API",
                    "Not relevant to React"
                ],
                "answer": "Allows independent teams to load parts (micro‑frontends) at runtime via webpack, sharing React dependencies and enabling scalable codebases"
            },
            {
                "question": "What is the difference between `React.StrictMode` in development vs production?",
                "options": [
                    "In development it may double‑invoke certain functions (e.g., constructor, render) to detect side‑effect bugs; in production it has no such behaviour",
                    "It changes styling only",
                    "It disables hooks",
                    "It slows down production always"
                ],
                "answer": "In development it may double‑invoke certain functions (e.g., constructor, render) to detect side‑effect bugs; in production it has no such behaviour"
            },
            {
                "question": "Which performance technique helps avoid layout thrashing when updating animations or DOM repeatedly in React?",
                "options": [
                    "Batching updates, using `useLayoutEffect` only when necessary, moving heavy work off main thread, avoiding synchronous layout reads and writes in loops",
                    "Calling setState inside loops",
                    "Using useEffect always",
                    "Avoid batching always"
                ],
                "answer": "Batching updates, using `useLayoutEffect` only when necessary, moving heavy work off main thread, avoiding synchronous layout reads and writes in loops"
            },
            {
                "question": "How do you build a design system in React using cross‑component patterns like Compound Components, Context, and custom hooks?",
                "options": [
                    "By creating modular, reusable components that share logic and internal context, exposing clean APIs and abstracting implementation details",
                    "By styling each component separately",
                    "By using class components only",
                    "By avoiding custom hooks"
                ],
                "answer": "By creating modular, reusable components that share logic and internal context, exposing clean APIs and abstracting implementation details"
            },
            {
                "question": "When migrating a large React codebase to hooks from class components, what are some best practices?",
                "options": [
                    "Migrate one feature at a time, ensure tests cover old behaviour, use custom hooks to extract logic, keep UI stable, gradually remove lifecycle methods",
                    "Rewrite everything at once",
                    "Only migrate styling",
                    "Ignore tests"
                ],
                "answer": "Migrate one feature at a time, ensure tests cover old behaviour, use custom hooks to extract logic, keep UI stable, gradually remove lifecycle methods"
            },
            {
                "question": "How does server‑side rendering combined with hydration differ in a React app and what must you watch out for?",
                "options": [
                    "Server‑side rendered markup is reused on client; hydration attaches event handlers; mismatches lead to warnings or full re‑render; you must ensure safe code (no browser‑only APIs) and consistent markup",
                    "They are identical processes",
                    "Hydration only for class components",
                    "SSR no longer used"
                ],
                "answer": "Server‑side rendered markup is reused on client; hydration attaches event handlers; mismatches lead to warnings or full re‑render; you must ensure safe code (no browser‑only APIs) and consistent markup"
            },
            {
                "question": "What is the “Controlled Prop” pattern vs “Uncontrolled Prop” in React library components and why is it useful?",
                "options": [
                    "Controlled prop means the parent manages state and passes value + onChange; uncontrolled means internal state; support both for flexibility",
                    "Only uncontrolled is valid",
                    "Only controlled is valid",
                    "They are the same"
                ],
                "answer": "Controlled prop means the parent manages state and passes value + onChange; uncontrolled means internal state; support both for flexibility"
            },
            {
                "question": "Why should you avoid side‑effects in render and derive state from props sparingly in React?",
                "options": [
                    "Because it can cause infinite loops, unexpected behaviour, and violates React’s data‑flow model",
                    "Because hooks don’t allow it",
                    "Because it slows CSS",
                    "Because it requires class components"
                ],
                "answer": "Because it can cause infinite loops, unexpected behaviour, and violates React’s data‑flow model"
            },
            {
                "question": "How do “client components” in Next.js 13+ differ from “server components” w.r.t. React’s rendering model?",
                "options": [
                    "Client components run in browser, can use state/hooks; server components run on server, no state/hooks, smaller bundle size; mixing improves performance",
                    "Client components cannot use hooks",
                    "Server components run in browser only",
                    "They are identical"
                ],
                "answer": "Client components run in browser, can use state/hooks; server components run on server, no state/hooks, smaller bundle size; mixing improves performance"
            },
            {
                "question": "What technique can you use to avoid “prop drilling” and yet localize re‑renders in large component trees?",
                "options": [
                    "Use Context + custom selectors / splitting providers / useReducer or state management libraries to localize updates",
                    "Always pass props through many layers",
                    "Use only global state everywhere",
                    "Use CSS modules only"
                ],
                "answer": "Use Context + custom selectors / splitting providers / useReducer or state management libraries to localize updates"
            }
        ],
    },
    nodeJS: {
        beginners: [
            {
                "question": "What is Node.js primarily used for?",
                "options": [
                    "Frontend development",
                    "Backend server‑side JavaScript runtime",
                    "Mobile app development",
                    "Database management system"
                ],
                "answer": "Backend server‑side JavaScript runtime"
            },
            {
                "question": "Which JavaScript engine does Node.js use under the hood?",
                "options": [
                    "SpiderMonkey",
                    "Chakra",
                    "V8",
                    "JavaScriptCore"
                ],
                "answer": "V8"
            },
            {
                "question": "What does NPM stand for?",
                "options": [
                    "Node Package Manager",
                    "New Project Module",
                    "Node Performance Monitor",
                    "Native Package Manager"
                ],
                "answer": "Node Package Manager"
            },
            {
                "question": "Which built‑in module is used to work with the file system in Node.js?",
                "options": [
                    "http",
                    "os",
                    "fs",
                    "path"
                ],
                "answer": "fs"
            },
            {
                "question": "What is the command to initialize a new Node.js project and create package.json?",
                "options": [
                    "npm init",
                    "node init",
                    "npm start",
                    "node create"
                ],
                "answer": "npm init"
            },
            {
                "question": "How do you import a built‑in module, for example ‘fs’, using CommonJS modules?",
                "options": [
                    "import fs from 'fs';",
                    "const fs = require('fs');",
                    "module fs = import('fs');",
                    "var fs := require('fs');"
                ],
                "answer": "const fs = require('fs');"
            },
            {
                "question": "What is the purpose of package.json in a Node.js project?",
                "options": [
                    "To log runtime errors",
                    "To store project metadata, dependencies and scripts",
                    "To hold CSS styles",
                    "To manage database tables"
                ],
                "answer": "To store project metadata, dependencies and scripts"
            },
            {
                "question": "Which global object gives you information about the current Node.js process?",
                "options": [
                    "global",
                    "process",
                    "env",
                    "system"
                ],
                "answer": "process"
            },
            {
                "question": "How can you read an environment variable named PORT in Node.js?",
                "options": [
                    "process.VAR.PORT",
                    "process.env.PORT",
                    "process.PORT",
                    "env.PORT"
                ],
                "answer": "process.env.PORT"
            },
            {
                "question": "What does the built‑in http module allow you to do?",
                "options": [
                    "Create a web server",
                    "Style HTML pages",
                    "Manage database connections",
                    "Run mobile apps"
                ],
                "answer": "Create a web server"
            },
            {
                "question": "Which call creates a basic HTTP server in Node.js?",
                "options": [
                    "http.createServer((req, res) => {})",
                    "http.server((req, res) => {})",
                    "new http.Server((req, res) => {})",
                    "http.startServer((req, res) => {})"
                ],
                "answer": "http.createServer((req, res) => {})"
            },
            {
                "question": "What is non‑blocking I/O in Node.js?",
                "options": [
                    "Operations block the main thread until complete",
                    "Operations happen synchronously",
                    "Operations allow other tasks to proceed while waiting for I/O",
                    "I/O is handled only by separate threads"
                ],
                "answer": "Operations allow other tasks to proceed while waiting for I/O"
            },
            {
                "question": "Which statement best describes the event loop in Node.js?",
                "options": [
                    "It handles synchronous code only",
                    "It waits for one task to finish before starting another",
                    "It manages asynchronous callbacks and events in a single thread",
                    "It spawns multiple threads for each request"
                ],
                "answer": "It manages asynchronous callbacks and events in a single thread"
            },
            {
                "question": "What is a callback in Node.js?",
                "options": [
                    "A function that is executed immediately",
                    "A function passed as an argument to be called later",
                    "A module import function",
                    "A method for styling output"
                ],
                "answer": "A function passed as an argument to be called later"
            },
            {
                "question": "What keyword is used to export functionality from a module in CommonJS?",
                "options": [
                    "export",
                    "module.exports",
                    "exports = ",
                    "require"
                ],
                "answer": "module.exports"
            },
            {
                "question": "What does the path module help you to do?",
                "options": [
                    "Read files",
                    "Resolve file system paths",
                    "Create HTTP servers",
                    "Manage environment variables"
                ],
                "answer": "Resolve file system paths"
            },
            {
                "question": "Which syntax is used to import modules using ES Modules in Node.js (with ESM enabled)?",
                "options": [
                    "const module = import('module');",
                    "require('module');",
                    "import module from 'module';",
                    "module.load('module');"
                ],
                "answer": "import module from 'module';"
            },
            {
                "question": "What file extension must you use to enable ES Modules in Node.js by default?",
                "options": [
                    ".cjs",
                    ".mjs",
                    ".esm",
                    ".js"
                ],
                "answer": ".mjs"
            },
            {
                "question": "Which package is commonly used to create web applications and APIs in Node.js?",
                "options": [
                    "Django",
                    "Flask",
                    "Express",
                    "Rails"
                ],
                "answer": "Express"
            },
            {
                "question": "In Express.js, what does `app.use()` do?",
                "options": [
                    "Starts the server",
                    "Registers middleware",
                    "Handles database queries",
                    "Creates a template engine"
                ],
                "answer": "Registers middleware"
            },
            {
                "question": "What HTTP method is typically used to retrieve data from a server?",
                "options": [
                    "POST",
                    "PUT",
                    "DELETE",
                    "GET"
                ],
                "answer": "GET"
            },
            {
                "question": "Which HTTP status code represents 'OK'?",
                "options": [
                    "200",
                    "404",
                    "500",
                    "301"
                ],
                "answer": "200"
            },
            {
                "question": "How do you run a Node.js file named server.js from the command line?",
                "options": [
                    "node server.js",
                    "npm server.js",
                    "npm run server.js",
                    "node run server.js"
                ],
                "answer": "node server.js"
            },
            {
                "question": "Which global object gives you the current directory name of the executing script?",
                "options": [
                    "__dirname",
                    "__filename",
                    "process.cwd()",
                    "global.dir"
                ],
                "answer": "__dirname"
            },
            {
                "question": "Which global object gives you the current filename of the executing script?",
                "options": [
                    "__dirname",
                    "__filename",
                    "process.argv",
                    "global.name"
                ],
                "answer": "__filename"
            },
            {
                "question": "How can you get command‑line arguments passed to a Node.js script?",
                "options": [
                    "process.args",
                    "process.argv",
                    "process.parameters",
                    "process.input"
                ],
                "answer": "process.argv"
            },
            {
                "question": "Which module helps you to work with operating system related utility methods in Node.js?",
                "options": [
                    "os",
                    "http",
                    "fs",
                    "net"
                ],
                "answer": "os"
            },
            {
                "question": "What does the `require()` function return when you import a module?",
                "options": [
                    "Undefined always",
                    "The exported object or value from that module",
                    "A new HTTP server",
                    "A Promise"
                ],
                "answer": "The exported object or value from that module"
            },
            {
                "question": "Which module type in Node.js deals with networking for TCP and IP?",
                "options": [
                    "http",
                    "net",
                    "url",
                    "tls"
                ],
                "answer": "net"
            },
            {
                "question": "What is a Promise in Node.js?",
                "options": [
                    "A synchronous function",
                    "A callback alias",
                    "An object representing eventual completion or failure of asynchronous work",
                    "A module import"
                ],
                "answer": "An object representing eventual completion or failure of asynchronous work"
            },
            {
                "question": "Which keyword is used with Async functions to wait for a Promise to resolve?",
                "options": [
                    "await",
                    "wait",
                    "pause",
                    "sleep"
                ],
                "answer": "await"
            },
            {
                "question": "In Express.js, how do you define a route that handles POST requests at '/login'?",
                "options": [
                    "app.get('/login', handler);",
                    "app.post('/login', handler);",
                    "app.route('/login', handler);",
                    "app.handle('/login', handler);"
                ],
                "answer": "app.post('/login', handler);"
            },
            {
                "question": "What tool helps you automatically restart your Node.js application when files change?",
                "options": [
                    "nodemon",
                    "express",
                    "npm start",
                    "node-static"
                ],
                "answer": "nodemon"
            },
            {
                "question": "Which operator checks for both value and type equality in JavaScript/Node.js?",
                "options": [
                    "==",
                    "=",
                    "===",
                    "!="
                ],
                "answer": "==="
            },
            {
                "question": "What is the difference between `==` and `===` in JavaScript/Node.js?",
                "options": [
                    "`==` checks type and value, `===` checks only value",
                    "`==` checks value with coercion, `===` checks value and type",
                    "`==` is not valid in Node.js",
                    "`===` is deprecated"
                ],
                "answer": "`==` checks value with coercion, `===` checks value and type"
            },
            {
                "question": "What does `console.log()` do in Node.js?",
                "options": [
                    "Writes output to standard output stream",
                    "Stops the program",
                    "Imports a module",
                    "Creates a server"
                ],
                "answer": "Writes output to standard output stream"
            },
            {
                "question": "What is the correct way to handle errors for an async function using try/catch?",
                "options": [
                    "try { await asyncFunc(); } catch (err) { console.error(err); }",
                    "asyncFunc().error(err);",
                    "await asyncFunc().catch(err => {});",
                    "try { asyncFunc(); } catch (err) { }"
                ],
                "answer": "try { await asyncFunc(); } catch (err) { console.error(err); }"
            },
            {
                "question": "Which module helps you create a secure HTTPS server in Node.js?",
                "options": [
                    "http",
                    "https",
                    "tls",
                    "net"
                ],
                "answer": "https"
            },
            {
                "question": "How do you export a single item (e.g., a function) from a module in CommonJS?",
                "options": [
                    "exports.myFunc = myFunc;",
                    "module.exports = myFunc;",
                    "export default myFunc;",
                    "export myFunc;"
                ],
                "answer": "module.exports = myFunc;"
            },
            {
                "question": "What does `process.exit(1)` do in a Node.js program?",
                "options": [
                    "Exits program with success code",
                    "Exits program with error code 1",
                    "Pauses program",
                    "Starts a new process"
                ],
                "answer": "Exits program with error code 1"
            },
            {
                "question": "Which method of the fs module reads a file asynchronously?",
                "options": [
                    "fs.readFileSync()",
                    "fs.open()",
                    "fs.readFile()",
                    "fs.read()"
                ],
                "answer": "fs.readFile()"
            },
            {
                "question": "What is middleware in Express.js?",
                "options": [
                    "A function that sits between request and response to process input, authentication or routing",
                    "A database connector",
                    "A built‑in Node.js feature only",
                    "A frontend library"
                ],
                "answer": "A function that sits between request and response to process input, authentication or routing"
            },
            {
                "question": "What module allows you to parse JSON in Node.js?",
                "options": [
                    "json",
                    "fs",
                    "JSON (global object)",
                    "parser"
                ],
                "answer": "JSON (global object)"
            },
            {
                "question": "Which method stops the Node.js server from listening to new connections?",
                "options": [
                    "server.close()",
                    "server.stop()",
                    "server.shutdown()",
                    "server.end()"
                ],
                "answer": "server.close()"
            },
            {
                "question": "What is the default value of `NODE_ENV` in a Node.js application if not explicitly set?",
                "options": [
                    "production",
                    "development",
                    "test",
                    "undefined"
                ],
                "answer": "undefined"
            },
            {
                "question": "Which command installs a new dependency locally to your project?",
                "options": [
                    "npm get package",
                    "npm install package",
                    "node install package",
                    "npm add package"
                ],
                "answer": "npm install package"
            },
            {
                "question": "What flag do you use to install a package as a development dependency?",
                "options": [
                    "--dev",
                    "-D",
                    "--development",
                    "-dev"
                ],
                "answer": "-D"
            },
            {
                "question": "What does `npm start` do if defined in package.json scripts?",
                "options": [
                    "Installs dependencies",
                    "Runs the script defined under \"start\" in package.json",
                    "Deletes node_modules",
                    "Initializes a project"
                ],
                "answer": "Runs the script defined under \"start\" in package.json"
            },
            {
                "question": "What does `npm run test` do?",
                "options": [
                    "Installs test libraries",
                    "Runs the script defined under \"test\" in package.json",
                    "Deletes test files",
                    "Starts a server"
                ],
                "answer": "Runs the script defined under \"test\" in package.json"
            },
            {
                "question": "What kind of file is `.env` often used for in Node.js projects?",
                "options": [
                    "Environment variables configuration",
                    "Database dump",
                    "CSS styles",
                    "Log files"
                ],
                "answer": "Environment variables configuration"
            },
            {
                "question": "What is the purpose of `npm uninstall package`?",
                "options": [
                    "Removes the package from node_modules and updates package.json",
                    "Disables the package temporarily",
                    "Archives the package",
                    "Updates the package to latest version"
                ],
                "answer": "Removes the package from node_modules and updates package.json"
            },
            {
                "question": "How do you handle JSON requests body in Express.js (before Express v4.16)?",
                "options": [
                    "app.use(express.json());",
                    "app.use(bodyParser.json());",
                    "app.use(jsonParser());",
                    "app.use(express.body());"
                ],
                "answer": "app.use(bodyParser.json());"
            },
            {
                "question": "Which directive ensures strict mode in JavaScript files (including Node.js) when needed?",
                "options": [
                    "use strict;",
                    "strict mode;",
                    "enable strict;",
                    "mode strict;"
                ],
                "answer": "use strict;"
            },
            {
                "question": "What is the output of `console.log(typeof null);` in Node.js?",
                "options": [
                    "\"object\"",
                    "\"null\"",
                    "\"undefined\"",
                    "\"number\""
                ],
                "answer": "\"object\""
            },
            {
                "question": "Which built‑in method converts a callback‑based function to return a Promise?",
                "options": [
                    "util.promisify()",
                    "fs.promisify()",
                    "Promise.convert()",
                    "async.wrap()"
                ],
                "answer": "util.promisify()"
            },
            {
                "question": "What method is used to join path segments in a cross‑platform way in Node.js?",
                "options": [
                    "path.concat()",
                    "path.join()",
                    "path.add()",
                    "path.combine()"
                ],
                "answer": "path.join()"
            },
            {
                "question": "What is thread‑pooling in Node.js used for?",
                "options": [
                    "Running V8 engine threads directly",
                    "Handling CPU‑intensive operations off the main event loop",
                    "Creating HTTP servers",
                    "Serving static files"
                ],
                "answer": "Handling CPU‑intensive operations off the main event loop"
            },
            {
                "question": "Which method returns the current working directory of the Node.js process?",
                "options": [
                    "process.dir()",
                    "process.cwd()",
                    "process.current()",
                    "process.dirpath()"
                ],
                "answer": "process.cwd()"
            },
            {
                "question": "Which module is used for encryption, hashing and other cryptographic functions in Node.js?",
                "options": [
                    "crypto",
                    "hash",
                    "security",
                    "encrypt"
                ],
                "answer": "crypto"
            },
            {
                "question": "What is the meaning of callback hell in Node.js?",
                "options": [
                    "Nested callbacks making code hard to read and maintain",
                    "A promise chain gets too long",
                    "Too many modules imported",
                    "A debugger mode"
                ],
                "answer": "Nested callbacks making code hard to read and maintain"
            },
            {
                "question": "Which method schedules a callback for the next tick of event loop, before IO events?",
                "options": [
                    "setTimeout(fn,0)",
                    "process.nextTick(fn)",
                    "setImmediate(fn)",
                    "setInterval(fn,0)"
                ],
                "answer": "process.nextTick(fn)"
            },
            {
                "question": "Which method schedules a callback to occur on the next event loop iteration, after IO events?",
                "options": [
                    "process.nextTick(fn)",
                    "setImmediate(fn)",
                    "setTimeout(fn,0)",
                    "setInterval(fn,0)"
                ],
                "answer": "setImmediate(fn)"
            },
            {
                "question": "What is a stream in Node.js?",
                "options": [
                    "A large array of data in memory",
                    "An object to read/write data in chunks",
                    "A synchronous method",
                    "A promise wrapper"
                ],
                "answer": "An object to read/write data in chunks"
            },
            {
                "question": "Which stream type allows reading only?",
                "options": [
                    "Writable Stream",
                    "Duplex Stream",
                    "Readable Stream",
                    "Transform Stream"
                ],
                "answer": "Readable Stream"
            },
            {
                "question": "Which stream type allows writing only?",
                "options": [
                    "Writable Stream",
                    "Readable Stream",
                    "Transform Stream",
                    "Duplex Stream"
                ],
                "answer": "Writable Stream"
            },
            {
                "question": "Which stream type is both readable and writable?",
                "options": [
                    "Readable Stream",
                    "Writable Stream",
                    "Duplex Stream",
                    "Transform Stream"
                ],
                "answer": "Duplex Stream"
            },
            {
                "question": "Which stream type is both readable and writable and modifies the data as it passes through?",
                "options": [
                    "Readable Stream",
                    "Writable Stream",
                    "Transform Stream",
                    "Duplex Stream"
                ],
                "answer": "Transform Stream"
            },
            {
                "question": "What is the purpose of piping in streams?",
                "options": [
                    "To buffer entire data in memory",
                    "To connect output of one stream to input of another",
                    "To convert streams into promises",
                    "To write logs"
                ],
                "answer": "To connect output of one stream to input of another"
            },
            {
                "question": "Which module is often used for reading line‑by‑line input in Node.js CLI programs?",
                "options": [
                    "readline",
                    "fs",
                    "http",
                    "streamline"
                ],
                "answer": "readline"
            },
            {
                "question": "What does the os module’s `os.uptime()` function return?",
                "options": [
                    "Time since process started",
                    "Time since machine booted",
                    "Current CPU usage",
                    "Number of network requests"
                ],
                "answer": "Time since machine booted"
            },
            {
                "question": "Which built‑in module helps you work with URLs in Node.js?",
                "options": [
                    "url",
                    "http",
                    "path",
                    "querystring"
                ],
                "answer": "url"
            },
            {
                "question": "What is the result of running `node -v` in terminal?",
                "options": [
                    "Installs Node.js",
                    "Displays the current version of Node.js",
                    "Starts a Node.js server",
                    "Creates a new project"
                ],
                "answer": "Displays the current version of Node.js"
            },
            {
                "question": "Which command displays the version of NPM installed on your system?",
                "options": [
                    "npm version",
                    "npm –v",
                    "npm -version",
                    "npm v"
                ],
                "answer": "npm –v"
            },
            {
                "question": "What is the difference between synchronous and asynchronous file read in Node.js?",
                "options": [
                    "Sync blocks the thread until done; async allows other code to run while reading",
                    "Async blocks the thread; sync doesn’t",
                    "They behave identically",
                    "Sync returns promises"
                ],
                "answer": "Sync blocks the thread until done; async allows other code to run while reading"
            },
            {
                "question": "In Node.js, which method would you use to read a directory’s contents asynchronously?",
                "options": [
                    "fs.readdirSync()",
                    "fs.readDir()",
                    "fs.readdir()",
                    "fs.readDirAsync()"
                ],
                "answer": "fs.readdir()"
            },
            {
                "question": "What is the difference between process.nextTick() and setImmediate()?",
                "options": [
                    "nextTick executes before next event loop; setImmediate executes after I/O events",
                    "They behave the same",
                    "setImmediate runs sooner than nextTick",
                    "They only work in browser"
                ],
                "answer": "nextTick executes before next event loop; setImmediate executes after I/O events"
            },
            {
                "question": "Which keyword is used to indicate a promise‑based asynchronous function?",
                "options": [
                    "async",
                    "promise",
                    "await",
                    "then"
                ],
                "answer": "async"
            },
            {
                "question": "Which keyword is used inside an async function to pause execution until a promise resolves?",
                "options": [
                    "pause",
                    "wait",
                    "await",
                    "sleep"
                ],
                "answer": "await"
            },
            {
                "question": "What is the file extension commonly used for a Node.js script file?",
                "options": [
                    ".node",
                    ".js",
                    ".jsx",
                    ".ts"
                ],
                "answer": ".js"
            },
            {
                "question": "Which built‑in module provides methods to work with timers like setTimeout and setInterval?",
                "options": [
                    "timer",
                    "timers",
                    "schedule",
                    "time"
                ],
                "answer": "timers"
            },
            {
                "question": "How do you stop an interval created by setInterval()?",
                "options": [
                    "clearInterval(intervalId)",
                    "stopInterval(intervalId)",
                    "intervalId.stop()",
                    "cancelInterval(intervalId)"
                ],
                "answer": "clearInterval(intervalId)"
            },
            {
                "question": "What does the global object `__filename` represent in Node.js?",
                "options": [
                    "Name of the Node.js binary",
                    "Absolute filename of the current module",
                    "Directory name of the current module",
                    "Environment variable file"
                ],
                "answer": "Absolute filename of the current module"
            },
            {
                "question": "Which method writes data to a file synchronously in Node.js?",
                "options": [
                    "fs.appendFile()",
                    "fs.writeFileSync()",
                    "fs.write()",
                    "fs.writeSync()"
                ],
                "answer": "fs.writeFileSync()"
            },
            {
                "question": "Which statement is true about Node.js’s single‑threaded model?",
                "options": [
                    "Node.js cannot handle multiple connections",
                    "Node.js uses one main thread but can delegate I/O operations to the system kernel",
                    "Node.js spawns a new thread per request",
                    "Node.js only handles one connection at a time"
                ],
                "answer": "Node.js uses one main thread but can delegate I/O operations to the system kernel"
            },
            {
                "question": "What is CORS in context of Node.js and HTTP servers?",
                "options": [
                    "Client‑only routing system",
                    "Cross‑Origin Resource Sharing – browser security feature for APIs",
                    "A file system permission setting",
                    "A debugging tool"
                ],
                "answer": "Cross‑Origin Resource Sharing – browser security feature for APIs"
            },
            {
                "question": "Which middleware is commonly used in Express.js to enable CORS?",
                "options": [
                    "cors",
                    "bodyParser",
                    "cookieParser",
                    "helmet"
                ],
                "answer": "cors"
            },
            {
                "question": "Which status code is typically used to indicate a resource was not found?",
                "options": [
                    "200",
                    "500",
                    "424",
                    "404"
                ],
                "answer": "404"
            },
            {
                "question": "Which of the following is NOT a built‑in Node.js module?",
                "options": [
                    "fs",
                    "http",
                    "express",
                    "os"
                ],
                "answer": "express"
            },
            {
                "question": "What does the `url.parse()` method do in Node.js?",
                "options": [
                    "Parses a URL string into its components",
                    "Sends an HTTP request",
                    "Reads a file from disk",
                    "Creates a server"
                ],
                "answer": "Parses a URL string into its components"
            },
            {
                "question": "What Node.js module would you use to work with query strings?",
                "options": [
                    "qs",
                    "querystring",
                    "param",
                    "urlquery"
                ],
                "answer": "querystring"
            },
            {
                "question": "Which method of the fs module appends data to a file asynchronously?",
                "options": [
                    "fs.appendFileSync()",
                    "fs.appendFile()",
                    "fs.writeFile()",
                    "fs.writeFileSync()"
                ],
                "answer": "fs.appendFile()"
            },
            {
                "question": "What does `module.exports = {}` allow you to do?",
                "options": [
                    "Import packages from npm",
                    "Export multiple properties or values from a module",
                    "Run a server",
                    "Start a database connection"
                ],
                "answer": "Export multiple properties or values from a module"
            },
            {
                "question": "Which method removes a file asynchronously in Node.js?",
                "options": [
                    "fs.delete()",
                    "fs.unlink()",
                    "fs.remove()",
                    "fs.erase()"
                ],
                "answer": "fs.unlink()"
            },
            {
                "question": "Which Node.js global variable returns the absolute path of the directory containing the currently executing file?",
                "options": [
                    "__file",
                    "__dir",
                    "__dirname",
                    "__path"
                ],
                "answer": "__dirname"
            },
            {
                "question": "What is the purpose of the npm script `npm test` if defined in package.json?",
                "options": [
                    "Installs test dependencies",
                    "Runs tests defined under the \"test\" script",
                    "Deletes tests directory",
                    "Runs linting only"
                ],
                "answer": "Runs tests defined under the \"test\" script"
            },
            {
                "question": "Which Node.js module provides utilities such as `inherits()` and `promisify()`?",
                "options": [
                    "util",
                    "helpers",
                    "tools",
                    "framework"
                ],
                "answer": "util"
            },
            {
                "question": "What is the purpose of `npm update package`?",
                "options": [
                    "Installs package for first time",
                    "Upgrades the package to the latest version permissible by package.json",
                    "Deletes the package",
                    "Starts a server"
                ],
                "answer": "Upgrades the package to the latest version permissible by package.json"
            },
            {
                "question": "What does `npm ls` do?",
                "options": [
                    "Lists installed packages in the project",
                    "Installs new packages",
                    "Runs script named ls",
                    "Deletes node_modules"
                ],
                "answer": "Lists installed packages in the project"
            },
            {
                "question": "Which module helps you create TCP servers and clients in Node.js?",
                "options": [
                    "http",
                    "tls",
                    "net",
                    "socket"
                ],
                "answer": "net"
            },
            {
                "question": "Which event is emitted when an error occurs in an EventEmitter or stream?",
                "options": [
                    "error",
                    "fail",
                    "exception",
                    "warning"
                ],
                "answer": "error"
            },
            {
                "question": "What does `JSON.stringify()` do in Node.js?",
                "options": [
                    "Parses a JSON string into object",
                    "Converts a JavaScript object into a JSON string",
                    "Runs a database query",
                    "Reads a file"
                ],
                "answer": "Converts a JavaScript object into a JSON string"
            },
            {
                "question": "What does `JSON.parse()` do?",
                "options": [
                    "Converts object to JSON string",
                    "Parses a JSON string into a JavaScript object",
                    "Starts a server",
                    "Deletes a file"
                ],
                "answer": "Parses a JSON string into a JavaScript object"
            },
            {
                "question": "Which module helps you work with child processes in Node.js?",
                "options": [
                    "child_process",
                    "process",
                    "threads",
                    "cluster"
                ],
                "answer": "child_process"
            },
            {
                "question": "What command installs all dependencies listed in package.json?",
                "options": [
                    "npm install",
                    "node install",
                    "npm add all",
                    "npm get"
                ],
                "answer": "npm install"
            },
            {
                "question": "What global scope object can you use to set a timeout in Node.js?",
                "options": [
                    "global.setTimeout",
                    "process.setTimeout",
                    "timeout.set",
                    "timer.setTimeout"
                ],
                "answer": "global.setTimeout"
            },
            {
                "question": "What does the `return` statement inside an Express middleware do (if included before next())?",
                "options": [
                    "Stops the current middleware execution and prevents next middlewares from running",
                    "Starts a new thread",
                    "Deletes the server",
                    "Nothing special"
                ],
                "answer": "Stops the current middleware execution and prevents next middlewares from running"
            },
            {
                "question": "Which method of Array can you use to handle promises concurrently in Node.js?",
                "options": [
                    "Promise.all()",
                    "Promise.handle()",
                    "Array.concurrent()",
                    "Promise.bulk()"
                ],
                "answer": "Promise.all()"
            },
            {
                "question": "What is the default maximum size of data you can write synchronously in a single `fs.write()` call before choking the event loop (approx)?",
                "options": [
                    "1 MB",
                    "256 KB",
                    "64 KB",
                    "10 MB"
                ],
                "answer": "256 KB"
            },
            {
                "question": "Which engine handles thread‑pool and async I/O for Node.js under the hood?",
                "options": [
                    "libuv",
                    "V8",
                    "node‑io",
                    "uvthread"
                ],
                "answer": "libuv"
            },
            {
                "question": "Which Atlas of processes for scaling Node.js across multiple CPU cores is used?",
                "options": [
                    "child_process.fork()",
                    "cluster.fork()",
                    "thread.spawn()",
                    "net.multi()"
                ],
                "answer": "cluster.fork()"
            },
            {
                "question": "What does `module.filename` return in Node.js?",
                "options": [
                    "Absolute path to the current module file",
                    "Module name only",
                    "Directory path",
                    "Filename without path"
                ],
                "answer": "Absolute path to the current module file"
            },
            {
                "question": "Which Node.js global variable is the namespace object for the current module’s exports?",
                "options": [
                    "exports",
                    "module.exports",
                    "module",
                    "namespace"
                ],
                "answer": "module.exports"
            }
        ]
        ,
        intermediate: [
            {
                "question": "What is the purpose of the `cluster` module in Node.js?",
                "options": [
                    "To create multiple HTTP servers inside the same thread",
                    "To distribute load across multiple CPU cores",
                    "To manage database connections",
                    "To replace child_process module"
                ],
                "answer": "To distribute load across multiple CPU cores"
            },
            {
                "question": "Which method converts a callback‐based function to return a Promise in Node.js?",
                "options": [
                    "Promise.convert()",
                    "util.promisify()",
                    "fs.promisify()",
                    "asyncify()"
                ],
                "answer": "util.promisify()"
            },
            {
                "question": "What is the difference between `process.nextTick()` and `setImmediate()`?",
                "options": [
                    "`process.nextTick()` queues callback after I/O events; `setImmediate()` queues before I/O",
                    "`process.nextTick()` queues before next event loop cycle; `setImmediate()` queues after I/O events",
                    "They are equivalent in execution timing",
                    "`setImmediate()` is deprecated"
                ],
                "answer": "`process.nextTick()` queues before next event loop cycle; `setImmediate()` queues after I/O events"
            },
            {
                "question": "Which Node.js module is used for working with binary data directly in buffers?",
                "options": [
                    "binary",
                    "bytes",
                    "Buffer (global)",
                    "dataStream"
                ],
                "answer": "Buffer (global)"
            },
            {
                "question": "What is a ‘ReadableStream’ in Node.js?",
                "options": [
                    "A stream that you can write data into",
                    "A stream that you can both read from and write to",
                    "A stream that you can only read data from",
                    "A wrapper for HTTP requests"
                ],
                "answer": "A stream that you can only read data from"
            },
            {
                "question": "Which stream mode in Node.js allows transforming data as it passes through?",
                "options": [
                    "ReadableStream",
                    "WritableStream",
                    "DuplexStream",
                    "TransformStream"
                ],
                "answer": "TransformStream"
            },
            {
                "question": "What does the `pipe()` method do on Node.js streams?",
                "options": [
                    "Connects output of one stream to input of another",
                    "Writes a file synchronously",
                    "Converts stream to promise",
                    "Closes a stream"
                ],
                "answer": "Connects output of one stream to input of another"
            },
            {
                "question": "In Express.js (running on Node.js), what is middleware?",
                "options": [
                    "A function that handles database logic only",
                    "A function that sits between request and response and can modify either",
                    "An HTTP server itself",
                    "A templating engine"
                ],
                "answer": "A function that sits between request and response and can modify either"
            },
            {
                "question": "What is the purpose of `helmet` when used in a Node.js/Express application?",
                "options": [
                    "To speed up network requests",
                    "To automatically scale to multiple cores",
                    "To set various HTTP security headers",
                    "To manage database pooling"
                ],
                "answer": "To set various HTTP security headers"
            },
            {
                "question": "What is the benefit of using `async/await` over raw callbacks in Node.js?",
                "options": [
                    "It makes code run faster in every case",
                    "It prevents the use of Promises",
                    "It allows writing asynchronous code with a synchronous style",
                    "It avoids event loop entirely"
                ],
                "answer": "It allows writing asynchronous code with a synchronous style"
            },
            {
                "question": "Which built‐in module in Node.js is used for cryptographic functions like hashing?",
                "options": [
                    "security",
                    "crypto",
                    "hash",
                    "encrypt"
                ],
                "answer": "crypto"
            },
            {
                "question": "What does the `child_process.fork()` method do in Node.js?",
                "options": [
                    "Spawns a new thread inside the same process",
                    "Creates a new Node.js process with communication channel",
                    "Replaces cluster module entirely",
                    "Starts a new HTTP server automatically"
                ],
                "answer": "Creates a new Node.js process with communication channel"
            },
            {
                "question": "How can you avoid blocking the event loop when performing CPU‐intensive tasks in Node.js?",
                "options": [
                    "Always use synchronous APIs",
                    "Use child processes, worker threads or offload to external service",
                    "Call `process.exit()` early",
                    "Use `setTimeout()` repeatedly"
                ],
                "answer": "Use child processes, worker threads or offload to external service"
            },
            {
                "question": "What is the role of the `package‑lock.json` file in a Node.js project?",
                "options": [
                    "Defines only the top‐level dependencies",
                    "Ensures exact dependency versions are installed for reproducibility",
                    "Is auto‐deleted each time npm runs",
                    "Contains environment variables"
                ],
                "answer": "Ensures exact dependency versions are installed for reproducibility"
            },
            {
                "question": "What is a “REPL” in Node.js?",
                "options": [
                    "Remote Execution Programming Layer",
                    "Read–Eval–Print Loop interactive shell",
                    "Real‐time Event Processing Library",
                    "React Extension for Node"
                ],
                "answer": "Read–Eval–Print Loop interactive shell"
            },
            {
                "question": "Which command installs all dependencies listed in `package.json` in your Node.js project?",
                "options": [
                    "npm update",
                    "npm install",
                    "npm init",
                    "npm start"
                ],
                "answer": "npm install"
            },
            {
                "question": "What is the significance of `process.env.NODE_ENV` in a Node.js application?",
                "options": [
                    "It defines the current version of Node.js",
                    "It indicates the environment (development, production) and can toggle behaviour accordingly",
                    "It is always “production” by default",
                    "It is only used by Express"
                ],
                "answer": "It indicates the environment (development, production) and can toggle behaviour accordingly"
            },
            {
                "question": "In Node.js, which core module allows you to create an HTTPS server?",
                "options": [
                    "ssl",
                    "tls",
                    "https",
                    "secureHttp"
                ],
                "answer": "https"
            },
            {
                "question": "What is “callback hell” in Node.js?",
                "options": [
                    "When you forget to call a callback",
                    "Nested callbacks with increasing indentation making code hard to read and maintain",
                    "When callbacks execute too slowly",
                    "When callbacks cannot be used"
                ],
                "answer": "Nested callbacks with increasing indentation making code hard to read and maintain"
            },
            {
                "question": "Which Node.js feature allows you to stream large files with minimal memory overhead?",
                "options": [
                    "fs.readFileSync()",
                    "fs.readFile() with callback",
                    "Streams (Readable/Writable) API",
                    "Synchronous file write"
                ],
                "answer": "Streams (Readable/Writable) API"
            },
            {
                "question": "What is the typical use of `mongoose` in a Node.js/Express application?",
                "options": [
                    "An HTTP client library",
                    "A MongoDB object‑document mapper (ODM)",
                    "A stream processing library",
                    "A clustering tool"
                ],
                "answer": "A MongoDB object‑document mapper (ODM)"
            },
            {
                "question": "What is the benefit of using `express.Router()` in an Express.js application?",
                "options": [
                    "It speeds up HTTP responses by 50%",
                    "It allows splitting routes into modular route handlers",
                    "It disables middleware",
                    "It replaces the HTTP module"
                ],
                "answer": "It allows splitting routes into modular route handlers"
            },
            {
                "question": "Which HTTP status code indicates that a resource has been permanently moved?",
                "options": [
                    "301",
                    "302",
                    "400",
                    "500"
                ],
                "answer": "301"
            },
            {
                "question": "What is the difference between `let`/`const` and `var` in Node.js (ES6+ environment)?",
                "options": [
                    "`var` has block‐scope; `let`/`const` do not",
                    "`let`/`const` have block‐scope; `var` has function‐scope or global‐scope",
                    "`var` is always preferred in Node.js",
                    "`const` allows reassignment"
                ],
                "answer": "`let`/`const` have block‐scope; `var` has function‐scope or global‐scope"
            },
            {
                "question": "In Express, how can you catch and handle errors in asynchronous route handlers?",
                "options": [
                    "By returning the error directly in the route function",
                    "By wrapping route handler in try/catch and passing error to next(err)",
                    "By ignoring errors",
                    "By using only synchronous handlers"
                ],
                "answer": "By wrapping route handler in try/catch and passing error to next(err)"
            },
            {
                "question": "What is “rate limiting” and why might it be implemented in a Node.js API?",
                "options": [
                    "Allowing unlimited requests per second",
                    "Controlling number of requests a client can make to prevent abuse and DDoS",
                    "Slowing down responses intentionally",
                    "Blocking all requests permanently"
                ],
                "answer": "Controlling number of requests a client can make to prevent abuse and DDoS"
            },
            {
                "question": "What does the method `fs.watch()` do in Node.js?",
                "options": [
                    "Reads a file and returns its contents",
                    "Watches for changes in a file or directory and emits events",
                    "Deletes a file",
                    "Writes a file synchronously"
                ],
                "answer": "Watches for changes in a file or directory and emits events"
            },
            {
                "question": "What is the purpose of `dotenv` in a Node.js project?",
                "options": [
                    "To deploy the app",
                    "To define environment variables from a .env file into process.env",
                    "To serve static files",
                    "To manage clustering"
                ],
                "answer": "To define environment variables from a .env file into process.env"
            },
            {
                "question": "Which database would you commonly use with Node.js for a relational data model?",
                "options": [
                    "MongoDB",
                    "PostgreSQL",
                    "Redis",
                    "Cassandra"
                ],
                "answer": "PostgreSQL"
            },
            {
                "question": "What is the purpose of `sequelize` in a Node.js application?",
                "options": [
                    "A real‐time communication library",
                    "An ORM for relational databases like PostgreSQL/MySQL",
                    "A stream library",
                    "A deployment tool"
                ],
                "answer": "An ORM for relational databases like PostgreSQL/MySQL"
            },
            {
                "question": "Which built‐in module in Node.js is used to parse URL strings?",
                "options": [
                    "querystring",
                    "url",
                    "path",
                    "http"
                ],
                "answer": "url"
            },
            {
                "question": "What is the purpose of using `morgan` middleware in Express?",
                "options": [
                    "To manage sessions",
                    "To log HTTP requests and responses",
                    "To encrypt data",
                    "To validate input"
                ],
                "answer": "To log HTTP requests and responses"
            },
            {
                "question": "Which HTTP method is idempotent and often used for updates?",
                "options": [
                    "POST",
                    "GET",
                    "DELETE",
                    "PUT"
                ],
                "answer": "PUT"
            },
            {
                "question": "What is the benefit of using `Promise.allSettled()` over `Promise.all()`?",
                "options": [
                    "It returns results only for fulfilled promises",
                    "It fails if any promise fails",
                    "It waits for all promises to settle, whether fulfilled or rejected",
                    "It is deprecated"
                ],
                "answer": "It waits for all promises to settle, whether fulfilled or rejected"
            },
            {
                "question": "What is the operation of `Buffer.from()` in Node.js?",
                "options": [
                    "Creates a buffer of specified size filled with zeros",
                    "Creates a buffer from a given string, array or buffer",
                    "Deletes a buffer",
                    "Converts buffer into string only"
                ],
                "answer": "Creates a buffer from a given string, array or buffer"
            },
            {
                "question": "Which module is needed if you want to use WebSockets with Node.js?",
                "options": [
                    "socket.io",
                    "fs",
                    "cluster",
                    "url"
                ],
                "answer": "socket.io"
            },
            {
                "question": "What does `res.locals` provide in Express middleware?",
                "options": [
                    "A place to store data to be passed to the next middleware or view",
                    "It ends the response immediately",
                    "It sets headers only",
                    "It defines the HTTP method"
                ],
                "answer": "A place to store data to be passed to the next middleware or view"
            },
            {
                "question": "What role does `npm shrinkwrap` play in a Node.js project (or `npm ci` workflow)?",
                "options": [
                    "Installs packages faster always",
                    "Locks down dependency tree for reproducible builds",
                    "Removes node_modules",
                    "Updates all dependencies"
                ],
                "answer": "Locks down dependency tree for reproducible builds"
            },
            {
                "question": "In Node.js, what is the effect of calling `server.unref()` on a timeout or handle?",
                "options": [
                    "It cancels the timeout completely",
                    "It allows the process to exit if this is the only handle left",
                    "It sets the timeout to zero",
                    "It disables the server"
                ],
                "answer": "It allows the process to exit if this is the only handle left"
            },
            {
                "question": "What is Docker used for in Node.js application deployment?",
                "options": [
                    "Packaging the application and its environment into a container for consistent deployment",
                    "Only for frontend code",
                    "Replacing Node.js entirely",
                    "Always slower performance"
                ],
                "answer": "Packaging the application and its environment into a container for consistent deployment"
            },
            {
                "question": "Which Node.js module lets you work with child processes and inter‐process communication?",
                "options": [
                    "process",
                    "cluster",
                    "child_process",
                    "thread"
                ],
                "answer": "child_process"
            },
            {
                "question": "What is “unhandled rejection” in Node.js and how should you handle it?",
                "options": [
                    "When a promise is rejected but no `.catch()` or `await` try/catch; you should listen to ‘unhandledRejection’ event and log or exit gracefully",
                    "When sync code throws error",
                    "When HTTP server fails",
                    "It can be ignored"
                ],
                "answer": "When a promise is rejected but no `.catch()` or `await` try/catch; you should listen to ‘unhandledRejection’ event and log or exit gracefully"
            },
            {
                "question": "What does `app.disable('x-powered-by')` do in an Express app?",
                "options": [
                    "Disables HTTP server",
                    "Removes the ‘X‑Powered‑By’ header to leak less information",
                    "Enables extra logging",
                    "Sets the server to production mode"
                ],
                "answer": "Removes the ‘X‑Powered‑By’ header to leak less information"
            },
            {
                "question": "Which datatype does `fs.stat()` return about a file or directory?",
                "options": [
                    "An object with file size, timestamps and depending flags (fs.Stats)",
                    "A string only",
                    "Boolean true/false",
                    "An HTTP response"
                ],
                "answer": "An object with file size, timestamps and depending flags (fs.Stats)"
            },
            {
                "question": "What is the effect of `server.keepAliveTimeout` in Node.js HTTP server settings?",
                "options": [
                    "The timeout before a connection is terminated when keep‐alive is enabled",
                    "Max size of request body",
                    "Number of seconds to wait for response only",
                    "Timeout before process exits"
                ],
                "answer": "The timeout before a connection is terminated when keep‐alive is enabled"
            },
            {
                "question": "What is the advantage of using prepared statements or parameterized queries in Node.js database libraries?",
                "options": [
                    "They run faster always",
                    "They help prevent SQL injection attacks",
                    "They aren’t compatible with Node.js",
                    "They only work for NoSQL"
                ],
                "answer": "They help prevent SQL injection attacks"
            },
            {
                "question": "What does the `once` method of an EventEmitter do in Node.js?",
                "options": [
                    "Listens to an event every time it is emitted",
                    "Listens once and then removes the listener automatically",
                    "Removes all listeners",
                    "Blocks the event loop"
                ],
                "answer": "Listens once and then removes the listener automatically"
            },
            {
                "question": "What is “graceful shutdown” of a Node.js server?",
                "options": [
                    "Immediately terminating the process",
                    "Allowing existing connections to finish, rejecting new ones, closing resources and then exiting",
                    "Deleting logs before exit",
                    "Restarting the server instantly"
                ],
                "answer": "Allowing existing connections to finish, rejecting new ones, closing resources and then exiting"
            },
            {
                "question": "What is the difference between `fs.readFile()` and `fs.createReadStream()`?",
                "options": [
                    "readFile streams data in chunks; createReadStream loads entire file into memory",
                    "readFile loads entire file into memory; createReadStream streams chunks of file for large data",
                    "They behave exactly the same",
                    "createReadStream returns a promise"
                ],
                "answer": "readFile loads entire file into memory; createReadStream streams chunks of file for large data"
            },
            {
                "question": "Which Node.js module would you use for working with TLS/SSL protocols directly?",
                "options": [
                    "https",
                    "tls",
                    "http2",
                    "secureNet"
                ],
                "answer": "tls"
            },
            {
                "question": "What does `http2` module enable in Node.js?",
                "options": [
                    "Sends HTTP1.0 only",
                    "Supports HTTP/2 features like multiplexing, header compression and binary framing",
                    "Stops secure connections",
                    "Only works with TLS disabled"
                ],
                "answer": "Supports HTTP/2 features like multiplexing, header compression and binary framing"
            },
            {
                "question": "Which feature of Node.js can you use to monitor memory usage and performance of your application in production?",
                "options": [
                    "console.log only",
                    "process.memoryUsage(), v8.getHeapStatistics() and third‑party modules like clinic.js",
                    "fs.writeFileSync logs",
                    "Nothing built‑in"
                ],
                "answer": "process.memoryUsage(), v8.getHeapStatistics() and third‑party modules like clinic.js"
            },
            {
                "question": "What is the advantage of using caching (e.g., Redis) in a Node.js backend?",
                "options": [
                    "Always increases response time",
                    "Reduces load on database and improves response time for repeated queries",
                    "Replaces database entirely",
                    "Makes code simpler only"
                ],
                "answer": "Reduces load on database and improves response time for repeated queries"
            },
            {
                "question": "In a Node.js/Express API, where would you typically place input validation logic?",
                "options": [
                    "Inside view templates only",
                    "In middleware before controller logic",
                    "At the database driver level only",
                    "In client‑side JS only"
                ],
                "answer": "In middleware before controller logic"
            },
            {
                "question": "What is the purpose of using `helmet()` in Express.js applications?",
                "options": [
                    "To simplify route definitions",
                    "To add HTTP headers that harden security",
                    "To add CSS styles",
                    "To manage database pooling"
                ],
                "answer": "To add HTTP headers that harden security"
            },
            {
                "question": "What does `EventEmitter.emit()` do in Node.js?",
                "options": [
                    "Listens for an event",
                    "Triggers the execution of all listeners for that event synchronously",
                    "Schedules event for later automatically",
                    "Removes the listener"
                ],
                "answer": "Triggers the execution of all listeners for that event synchronously"
            },
            {
                "question": "What role does `bodyParser.json()` middleware play in Express.js (pre‐4.16 versions)?",
                "options": [
                    "Parses JSON request bodies into `req.body`",
                    "Parses query string only",
                    "Serves static files",
                    "Handles view rendering"
                ],
                "answer": "Parses JSON request bodies into `req.body`"
            },
            {
                "question": "Which pattern helps you avoid deep callback nesting in Node.js code?",
                "options": [
                    "Callback chaining without return",
                    "Promises and async/await",
                    "Nested callbacks only",
                    "setTimeout loops"
                ],
                "answer": "Promises and async/await"
            },
            {
                "question": "What is the effect of using `global.gc()` in a Node.js process started with `--expose‑gc`?",
                "options": [
                    "Immediately performs garbage collection (not recommended in general production code)",
                    "Stops the process",
                    "Clears all variables permanently",
                    "No effect"
                ],
                "answer": "Immediately performs garbage collection (not recommended in general production code)"
            },
            {
                "question": "Which Node.js module would you use to schedule recurring jobs or tasks?",
                "options": [
                    "cron or node‑cron library",
                    "fs",
                    "http",
                    "tls"
                ],
                "answer": "cron or node‑cron library"
            },
            {
                "question": "What is the purpose of `npm audit` in a Node.js project?",
                "options": [
                    "Installs all dependencies",
                    "Reports known security vulnerabilities in installed packages",
                    "Removes unused modules",
                    "Deploys project"
                ],
                "answer": "Reports known security vulnerabilities in installed packages"
            },
            {
                "question": "What does the `http.globalAgent.maxSockets` setting control in Node.js HTTP module?",
                "options": [
                    "Number of concurrent sockets open by default agent",
                    "Timeout for each socket",
                    "Maximum request body size",
                    "Number of CPUs to use"
                ],
                "answer": "Number of concurrent sockets open by default agent"
            },
            {
                "question": "What is the purpose of `res.setHeader('Content‑Security‑Policy', ...)` in an Express response?",
                "options": [
                    "Sets default response body length",
                    "Defines allowed content sources and blocks XSS and other injection attacks",
                    "Compresses response automatically",
                    "Enables HTTP/2"
                ],
                "answer": "Defines allowed content sources and blocks XSS and other injection attacks"
            },
            {
                "question": "What does “back‑pressure” mean in Node.js streams?",
                "options": [
                    "When readable side is faster than writable side and you must pause reading until writable catches up",
                    "When streams block forever",
                    "When you call `pause()` too often",
                    "When you pipe into more than one writable"
                ],
                "answer": "When readable side is faster than writable side and you must pause reading until writable catches up"
            },
            {
                "question": "What is an “Unary callback” style in Node.js for asynchronous functions?",
                "options": [
                    "Callback with no arguments",
                    "Callback with an error as first argument and result as second (error‑first pattern)",
                    "Callback that returns a promise",
                    "Callback only for streams"
                ],
                "answer": "Callback with an error as first argument and result as second (error‑first pattern)"
            },
            {
                "question": "What is the benefit of using `Object.freeze()` on configuration objects in a Node.js application?",
                "options": [
                    "Makes them mutable later",
                    "Prevents accidental changes to constants or config once loaded",
                    "Automatically logs configuration",
                    "Speeds up memory"
                ],
                "answer": "Prevents accidental changes to constants or config once loaded"
            },
            {
                "question": "Which Node.js option starts the Inspector (debugger) when running the application?",
                "options": [
                    "node debug app.js",
                    "node --inspect app.js",
                    "node run debug app.js",
                    "npm debug"
                ],
                "answer": "node --inspect app.js"
            },
            {
                "question": "What is `heap‑dump` used for in Node.js?",
                "options": [
                    "To delete heap memory",
                    "To capture the snapshot of memory allocations for debugging memory leaks",
                    "To speed up event loop",
                    "To restart process"
                ],
                "answer": "To capture the snapshot of memory allocations for debugging memory leaks"
            },
            {
                "question": "Which library is commonly used for input validation in Express.js APIs?",
                "options": [
                    "joi",
                    "chalk",
                    "async",
                    "lodash"
                ],
                "answer": "joi"
            },
            {
                "question": "What is the effect of using `await Promise.race([...])` in Node.js?",
                "options": [
                    "Waits for all promises to resolve",
                    "Returns the first settled (fulfilled or rejected) promise result",
                    "Cancels other promises automatically",
                    "Reverses order of promises"
                ],
                "answer": "Returns the first settled (fulfilled or rejected) promise result"
            },
            {
                "question": "What is a “micro‐service” in the context of Node.js backend architecture?",
                "options": [
                    "A small frontend widget",
                    "A small independent backend service that performs one business capability and can be deployed independently",
                    "A database table",
                    "An Express route"
                ],
                "answer": "A small independent backend service that performs one business capability and can be deployed independently"
            }
        ]
        ,
        advanced: [
            {
                "question": "What is the difference between `process.nextTick()` and `setImmediate()` in Node.js?",
                "options": [
                    "`process.nextTick()` queues before the next event loop tick; `setImmediate()` queues on the check phase after I/O callbacks",
                    "`process.nextTick()` is deprecated; `setImmediate()` should always be used",
                    "`setImmediate()` executes before any I/O operations; `process.nextTick()` executes after",
                    "They behave identically"
                ],
                "answer": "`process.nextTick()` queues before the next event loop tick; `setImmediate()` queues on the check phase after I/O callbacks"
            },
            {
                "question": "Which module allows you to spawn worker threads in Node.js for CPU‐intensive tasks?",
                "options": [
                    "cluster",
                    "child_process",
                    "worker_threads",
                    "threads"
                ],
                "answer": "worker_threads"
            },
            {
                "question": "What is the primary use case of the `cluster` module in Node.js?",
                "options": [
                    "To share memory between threads",
                    "To allow Node.js to use multiple CPU cores by forking child processes",
                    "To manage asynchronous I/O operations",
                    "To handle WebSocket connections"
                ],
                "answer": "To allow Node.js to use multiple CPU cores by forking child processes"
            },
            {
                "question": "In Node.js, what is back‑pressure in streams?",
                "options": [
                    "When you apply too many writes and the stream never finishes",
                    "When a writable stream is slower than a readable stream and the producer must slow down",
                    "When the readable stream has no consumers",
                    "When you pipe more than two streams together"
                ],
                "answer": "When a writable stream is slower than a readable stream and the producer must slow down"
            },
            {
                "question": "What does `Readable.prototype.pipe()` do under the hood in Node.js streams?",
                "options": [
                    "Converts a Readable into a Promise",
                    "Automatically handles flow control, listening to 'data' and 'drain' events and manages back‑pressure",
                    "Writes all data synchronously",
                    "Closes the stream immediately"
                ],
                "answer": "Automatically handles flow control, listening to 'data' and 'drain' events and manages back‑pressure"
            },
            {
                "question": "What is the purpose of `util.promisify()` in Node.js?",
                "options": [
                    "Converts a synchronous function into asynchronous",
                    "Converts a callback‑based function into a Promise‑returning one",
                    "Wraps a Promise to take a callback",
                    "Optimizes event loop performance"
                ],
                "answer": "Converts a callback‑based function into a Promise‑returning one"
            },
            {
                "question": "Which of the following is a correct description of the event loop phases in Node.js?",
                "options": [
                    "Timers → Pending callbacks → Poll → Check → Close callbacks",
                    "Initialization → Pending → Poll → AfterPoll → Exit",
                    "Timers → I/O callbacks → Idle/Prepare → Poll → Check → Close callbacks",
                    "Tick → Pump → Exit"
                ],
                "answer": "Timers → I/O callbacks → Idle/Prepare → Poll → Check → Close callbacks"
            },
            {
                "question": "What feature does the `async_hooks` module provide in Node.js?",
                "options": [
                    "It logs all asynchronous operations automatically",
                    "It allows tracking of asynchronous resources and contexts (for tracing and debugging)",
                    "It replaces callback functions with async/await",
                    "It automatically batches asynchronous tasks"
                ],
                "answer": "It allows tracking of asynchronous resources and contexts (for tracing and debugging)"
            },
            {
                "question": "In Node.js, which global function can you use to measure high‑resolution time differences in your application?",
                "options": [
                    "process.hrtime()",
                    "Date.now()",
                    "performance.now()",
                    "os.uptime()"
                ],
                "answer": "process.hrtime()"
            },
            {
                "question": "What is a memory leak in the context of a Node.js application and how might it manifest?",
                "options": [
                    "When variables are overwritten frequently; it manifests as slow CPU",
                    "When objects that are no longer needed are still referenced, causing memory usage to continually rise",
                    "When HTTP requests fail frequently; it causes event loop to freeze",
                    "When the application uses too many worker threads"
                ],
                "answer": "When objects that are no longer needed are still referenced, causing memory usage to continually rise"
            },
            {
                "question": "Which tool or API can be used to capture a snapshot of the heap for debugging in Node.js?",
                "options": [
                    "console.snapshot()",
                    "process.memoryDump()",
                    "v8.getHeapSnapshot()",
                    "fs.dumpHeapSync()"
                ],
                "answer": "v8.getHeapSnapshot()"
            },
            {
                "question": "What does the `--expose-gc` flag do when starting Node.js?",
                "options": [
                    "Automatically runs garbage collection every second",
                    "Exposes a global `gc()` method to trigger garbage collection manually",
                    "Disables garbage collection entirely",
                    "Logs GC operations to file"
                ],
                "answer": "Exposes a global `gc()` method to trigger garbage collection manually"
            },
            {
                "question": "What is the significance of `cluster.schedulingPolicy = cluster.SCHED_RR;` in Node.js on some platforms?",
                "options": [
                    "It configures round‑robin scheduling of worker processes among CPUs (primarily on Windows)",
                    "It changes I/O scheduling priority",
                    "It restricts cluster processes to one CPU core",
                    "It is deprecated and no longer used"
                ],
                "answer": "It configures round‑robin scheduling of worker processes among CPUs (primarily on Windows)"
            },
            {
                "question": "Which Node.js API helps you create a server with HTTP/2 support?",
                "options": [
                    "http.createServer({ http2: true })",
                    "http2.createSecureServer()",
                    "tls.createHTTP2Server()",
                    "stream.createHTTP2Server()"
                ],
                "answer": "http2.createSecureServer()"
            },
            {
                "question": "What is the purpose of `worker_threads.MessageChannel` in Node.js?",
                "options": [
                    "It allows passing messages between worker threads synchronously",
                    "It creates a new thread pool",
                    "It replaces child_process for HTTP requests",
                    "It spawns new worker processes"
                ],
                "answer": "It allows passing messages between worker threads synchronously"
            },
            {
                "question": "What does the `asyncLocalStorage` class from `async_hooks` help you achieve in Node.js?",
                "options": [
                    "It stores asynchronously computed values globally",
                    "It provides per‑async‑context storage, allowing you to carry values across asynchronous call frames",
                    "It replaces `localStorage` in the browser",
                    "It blocks event loop when used"
                ],
                "answer": "It provides per‑async‑context storage, allowing you to carry values across asynchronous call frames"
            },
            {
                "question": "What is a “graceful shutdown” of a Node.js server and why is it important?",
                "options": [
                    "Exiting immediately after closing connections; important to save memory",
                    "Closing connections, stopping accepting new ones, finishing in‑flight work, then exiting; important to avoid data loss or corruption",
                    "Deleting all logs before exit; important for security",
                    "Restarting the server automatically; important for scalability"
                ],
                "answer": "Closing connections, stopping accepting new ones, finishing in‑flight work, then exiting; important to avoid data loss or corruption"
            },
            {
                "question": "Which pattern helps you avoid pooling too many connections to a database in a Node.js service?",
                "options": [
                    "Creating new connection per request",
                    "Singleton connection with no concurrency control",
                    "Connection pooling with limits and release strategy",
                    "Using only synchronous database calls"
                ],
                "answer": "Connection pooling with limits and release strategy"
            },
            {
                "question": "In Node.js, what is the benefit of using `tls.createSecureContext()` when establishing TLS connections?",
                "options": [
                    "It disables certificate verification",
                    "It allows reuse of TLS contexts and configurations, improving performance for multiple connections",
                    "It forces HTTP/3",
                    "It bypasses encryption"
                ],
                "answer": "It allows reuse of TLS contexts and configurations, improving performance for multiple connections"
            },
            {
                "question": "What is the advantage of using HTTP/2 push (server push) in a Node.js HTTP/2 server?",
                "options": [
                    "It reads client cookies automatically",
                    "It lets the server proactively send additional resources to the client before the client requests them, reducing latency",
                    "It disables client caching",
                    "It uses WebSocket under the hood"
                ],
                "answer": "It lets the server proactively send additional resources to the client before the client requests them, reducing latency"
            },
            {
                "question": "What is a DOM wrapper provided by `vm` module in Node.js used for?",
                "options": [
                    "Running browser DOM in Node.js",
                    "Running JavaScript code in a sandboxed context with separate global environment",
                    "Creating GUI applications",
                    "Replacing worker_threads"
                ],
                "answer": "Running JavaScript code in a sandboxed context with separate global environment"
            },
            {
                "question": "Which Node.js internal module deals with low‑level C++ binding and native addons?",
                "options": [
                    "node:addon",
                    "node:bindings",
                    "node:ffi",
                    "node:node_api or N‑API"
                ],
                "answer": "node:node_api or N‑API"
            },
            {
                "question": "What technique helps you mitigate prototype pollution vulnerabilities in Node.js applications?",
                "options": [
                    "Allowing uncontrolled property assignment",
                    "Using untrusted JSON directly as object, mutating Object.prototype",
                    "Using safe APIs, freezing prototypes and validating inputs before merging objects into others",
                    "Disabling TLS"
                ],
                "answer": "Using safe APIs, freezing prototypes and validating inputs before merging objects into others"
            },
            {
                "question": "How can you measure event loop latency from within a Node.js application?",
                "options": [
                    "Using setTimeout only",
                    "Using process.hrtime() at intervals and subtracting actual vs expected delay",
                    "Using console.log frequently",
                    "Using fs.stat() frequently"
                ],
                "answer": "Using process.hrtime() at intervals and subtracting actual vs expected delay"
            },
            {
                "question": "What is zero‐copy in the context of Node.js file I/O or networking, and why is it beneficial?",
                "options": [
                    "Copying data between buffers explicitly in JavaScript",
                    "Using `Buffer.copy()` always",
                    "Avoiding copying data between user and kernel space by using OS features like sendfile; beneficial for performance and memory usage",
                    "Disabling buffers entirely"
                ],
                "answer": "Avoiding copying data between user and kernel space by using OS features like sendfile; beneficial for performance and memory usage"
            },
            {
                "question": "What is the purpose of `worker_threads.shareArrayBuffer()` and atomics in Node.js?",
                "options": [
                    "To share string data between threads",
                    "To allow threads to share binary memory and perform atomic operations for true multi‑threaded coordination",
                    "To replace cluster module",
                    "To run synchronous code only"
                ],
                "answer": "To allow threads to share binary memory and perform atomic operations for true multi‑threaded coordination"
            },
            {
                "question": "In Node.js, what is “event loop blocking” and what might cause it?",
                "options": [
                    "When the event loop handles tasks too fast",
                    "When CPU‐bound synchronous code (e.g., loops, large JSON parsing) prevents the event loop from processing other tasks, causing delays",
                    "When there are no I/O operations",
                    "When you only use async/await"
                ],
                "answer": "When CPU‐bound synchronous code (e.g., loops, large JSON parsing) prevents the event loop from processing other tasks, causing delays"
            },
            {
                "question": "What is the use of `http2.constants.NGHTTP2_CANCEL` in Node.js?",
                "options": [
                    "To disable HTTP/2 server entirely",
                    "To indicate that a stream is canceled by the application or client in HTTP/2 protocol",
                    "To close the entire connection",
                    "To downgrade to HTTP/1.1 automatically"
                ],
                "answer": "To indicate that a stream is canceled by the application or client in HTTP/2 protocol"
            },
            {
                "question": "What does `process.umask()` do in a Node.js process?",
                "options": [
                    "Sets the maximum number of threads",
                    "Returns or sets the process file mode creation mask, influencing the permission bits of files created by the process",
                    "Limits memory usage",
                    "Starts a worker thread"
                ],
                "answer": "Returns or sets the process file mode creation mask, influencing the permission bits of files created by the process"
            },
            {
                "question": "How does `crypto.createCipheriv()` differ from `crypto.createCipher()` in Node.js?",
                "options": [
                    "createCipheriv() allows specification of initialization vector (IV) for better security, while createCipher() uses deprecated default IV usage",
                    "createCipheriv() is slower always",
                    "createCipher() uses custom algorithm only",
                    "Both are identical"
                ],
                "answer": "createCipheriv() allows specification of initialization vector (IV) for better security, while createCipher() uses deprecated default IV usage"
            },
            {
                "question": "What is the purpose of `fs.watchFile()` vs `fs.watch()` in Node.js?",
                "options": [
                    "fs.watchFile() uses polling under the hood (less efficient), while fs.watch() uses native OS events (where supported)",
                    "fs.watchFile() only works on directories",
                    "fs.watch() is deprecated",
                    "They are identical in behaviour"
                ],
                "answer": "fs.watchFile() uses polling under the hood (less efficient), while fs.watch() uses native OS events (where supported)"
            },
            {
                "question": "What is “lazy loading” or “code‑splitting” in a Node.js backend context and why might you use it?",
                "options": [
                    "Loading all modules at startup before incoming traffic",
                    "Delaying the loading of certain modules/routes until needed, reducing memory footprint and startup time",
                    "Only for frontend frameworks",
                    "Avoiding modules altogether"
                ],
                "answer": "Delaying the loading of certain modules/routes until needed, reducing memory footprint and startup time"
            },
            {
                "question": "Which Node.js API helps you gather CPU usage statistics for the current process?",
                "options": [
                    "process.cpuUsage()",
                    "os.cpuUsage()",
                    "util.cpuStats()",
                    "fs.cpuUsage()"
                ],
                "answer": "process.cpuUsage()"
            },
            {
                "question": "What is the purpose of `worker_threads.MessagePort` in Node.js?",
                "options": [
                    "To send messages only from main thread to worker",
                    "To send messages in both directions between threads, enabling two‑way communication",
                    "To pause a worker thread",
                    "To terminate a thread"
                ],
                "answer": "To send messages in both directions between threads, enabling two‑way communication"
            },
            {
                "question": "What does `Symbol.asyncIterator` enable in Node.js?",
                "options": [
                    "It allows objects to be iterated using `for await…of`, enabling asynchronous iteration, such as streaming data",
                    "It is deprecated",
                    "It replaces Promises",
                    "It blocks the event loop"
                ],
                "answer": "It allows objects to be iterated using `for await…of`, enabling asynchronous iteration, such as streaming data"
            },
            {
                "question": "What is the difference between `module.exports = {}` and `exports.myFunc = …` in Node.js modules?",
                "options": [
                    "There is no difference",
                    "`module.exports` replaces the entire export; using `exports` just adds properties to the same object as `module.exports` so you must not reassign `exports` if you want to export correctly",
                    "`exports` is for ES Modules only",
                    "`module.exports` is deprecated"
                ],
                "answer": "`module.exports` replaces the entire export; using `exports` just adds properties to the same object as `module.exports` so you must not reassign `exports` if you want to export correctly"
            },
            {
                "question": "How does `URL.origin` differ from `URL.host` in Node.js when parsing URLs?",
                "options": [
                    "`origin` includes scheme + host + port; `host` includes hostname + port only",
                    "`host` includes scheme; `origin` does not",
                    "They are identical",
                    "Only `host` is supported"
                ],
                "answer": "`origin` includes scheme + host + port; `host` includes hostname + port only"
            },
            {
                "question": "What is the benefit of using `async/await` with `Promise.all()` in Node.js?",
                "options": [
                    "It ensures tasks run strictly sequentially",
                    "It allows running multiple asynchronous operations in parallel and then awaiting their completion, improving performance and readability",
                    "It removes the need for try/catch",
                    "It always uses worker threads"
                ],
                "answer": "It allows running multiple asynchronous operations in parallel and then awaiting their completion, improving performance and readability"
            },
            {
                "question": "In Node.js, what does `fs.constants.O_NOFOLLOW` flag do when opening a file?",
                "options": [
                    "Prevents following symbolic links when opening the file (enhances security)",
                    "Disables reading the file",
                    "Always enters read‑only mode",
                    "Forces synchronous mode"
                ],
                "answer": "Prevents following symbolic links when opening the file (enhances security)"
            },
            {
                "question": "What is a “microservice” architecture and why might Node.js be a good fit for it?",
                "options": [
                    "A monolithic application split into many small services; Node.js’s lightweight, event‑driven nature and npm ecosystem make it suitable for many small independent services",
                    "A frontend only approach",
                    "A legacy architecture pattern",
                    "Node cannot be used for microservices"
                ],
                "answer": "A monolithic application split into many small services; Node.js’s lightweight, event‑driven nature and npm ecosystem make it suitable for many small independent services"
            },
            {
                "question": "Which database connection strategy can significantly improve performance in a high‑throughput Node.js service?",
                "options": [
                    "Opening a new connection per request",
                    "Using a connection pool with limited size and reuse",
                    "Using synchronous blocking queries",
                    "Never closing connections"
                ],
                "answer": "Using a connection pool with limited size and reuse"
            },
            {
                "question": "What role does `tls.TLSSocket.getPeerCertificate()` play in a Node.js HTTPS server?",
                "options": [
                    "It returns the server’s own certificate only",
                    "It retrieves the peer’s (client’s) certificate in mutual TLS scenarios, enabling verification",
                    "It disables TLS",
                    "It auto‑upgrades to HTTP/2"
                ],
                "answer": "It retrieves the peer’s (client’s) certificate in mutual TLS scenarios, enabling verification"
            },
            {
                "question": "How can you detect whether a Node.js Buffer contains binary data or text data effectively?",
                "options": [
                    "By calling buffer.isBinary()",
                    "By inspecting encoding heuristics or checking ranges of bytes (e.g., non‑ASCII ranges) and using `Buffer.isBuffer()` to verify it’s a buffer",
                    "By reading as UTF‑16 always",
                    "By converting to string and checking length"
                ],
                "answer": "By inspecting encoding heuristics or checking ranges of bytes (e.g., non‑ASCII ranges) and using `Buffer.isBuffer()` to verify it’s a buffer"
            },
            {
                "question": "What is the difference between `spawn()` and `exec()` in `child_process` module in Node.js?",
                "options": [
                    "spawn() executes a command in a new process and streams the I/O; exec() runs a command with buffering of the output, and returns the complete output in a callback",
                    "They are identical",
                    "spawn() buffers output; exec() streams it",
                    "exec() is for Windows only"
                ],
                "answer": "spawn() executes a command in a new process and streams the I/O; exec() runs a command with buffering of the output, and returns the complete output in a callback"
            },
            {
                "question": "Why is it important to call `server.unref()` for certain timers or handles in a Node.js process?",
                "options": [
                    "It prevents the process from exiting",
                    "It allows the process to exit when this timer/handle is the only thing left running, helping graceful shutdown",
                    "It increases CPU usage",
                    "It disables the handle permanently"
                ],
                "answer": "It allows the process to exit when this timer/handle is the only thing left running, helping graceful shutdown"
            },
            {
                "question": "What does `Symbol.for('nodejs.async_hooks.triggerAsyncId')` help you retrieve in Node.js async_hooks?",
                "options": [
                    "The trigger id for asynchronous execution contexts, allowing you to correlate parent→child async operations",
                    "The main thread id",
                    "The CPU core id",
                    "It is deprecated"
                ],
                "answer": "The trigger id for asynchronous execution contexts, allowing you to correlate parent→child async operations"
            },
            {
                "question": "Which HTTP status code should you use for “Too Many Requests” in a rate‑limited Node.js API?",
                "options": [
                    "429",
                    "403",
                    "400",
                    "500"
                ],
                "answer": "429"
            },
            {
                "question": "What is the use of `res.writeContinue()` in a Node.js HTTP server?",
                "options": [
                    "It sends an “HTTP/1.1 100 Continue” to signal the client to continue sending request body, useful when processing Expect header",
                    "It closes the response",
                    "It sends an error code",
                    "It flushes the socket"
                ],
                "answer": "It sends an “HTTP/1.1 100 Continue” to signal the client to continue sending request body, useful when processing Expect header"
            },
            {
                "question": "What is `AsyncResource` in Node.js and how might you use it?",
                "options": [
                    "It is a type of buffer",
                    "It is part of async_hooks, used to create and manage custom asynchronous resources so that async context tracking works correctly with user‑created async work",
                    "It replaces worker_threads",
                    "It auto‑closes resources"
                ],
                "answer": "It is part of async_hooks, used to create and manage custom asynchronous resources so that async context tracking works correctly with user‑created async work"
            },
            {
                "question": "What is the effect of setting `process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'` in a Node.js process?",
                "options": [
                    "It enforces stricter TLS certificate validation",
                    "It disables TLS verification entirely (insecure) so all certificates are accepted",
                    "It forces HTTP/2 only",
                    "It prevents HTTPS connections"
                ],
                "answer": "It disables TLS verification entirely (insecure) so all certificates are accepted"
            },
            {
                "question": "What technique helps increase HTTP server throughput in Node.js when dealing with many small requests?",
                "options": [
                    "Using synchronous handlers only",
                    "Using HTTP keep‑alive, connection pooling, caching and minimizing per‑request overhead (computations, allocations, I/O)",
                    "Using a separate process per request",
                    "Avoiding worker threads altogether"
                ],
                "answer": "Using HTTP keep‑alive, connection pooling, caching and minimizing per‑request overhead (computations, allocations, I/O)"
            },
            {
                "question": "In Node.js, what is the purpose of `process.binding()` (undocumented)?",
                "options": [
                    "To bind event handlers easier",
                    "It accesses internal C++ bindings (should not be used in production); used by core modules for low‑level operations",
                    "To bind worker threads",
                    "It is removed in Node 10"
                ],
                "answer": "It accesses internal C++ bindings (should not be used in production); used by core modules for low‑level operations"
            },
            {
                "question": "Which Node.js API allows you to create HTTP middleware that runs before the router but only once per request, even if you call next() multiple times?",
                "options": [
                    "app.use() only",
                    "app.all() only",
                    "router.use() only",
                    "app.use() with `res.once('finish', …)` or custom logic – but there is no built‑in “once per request” middleware guard",
                    "None of the above"
                ],
                "answer": "None of the above"
            },
            {
                "question": "What is the purpose of `vm.Script.runInNewContext()` in Node.js?",
                "options": [
                    "To compile a script and run it in a sandboxed global environment with its own context, for isolation",
                    "To spawn a child process",
                    "To render Vue.js components",
                    "To measure event loop latency"
                ],
                "answer": "To compile a script and run it in a sandboxed global environment with its own context, for isolation"
            },
            {
                "question": "What is libuv in Node.js and why should you care?",
                "options": [
                    "It’s the V8 engine JavaScript runtime",
                    "It is the underlying C library that implements the event loop, I/O work‑queues and threading abstractions for Node.js, so understanding it helps with diagnosing performance bottlenecks",
                    "It is a type of npm package manager",
                    "It is only relevant for browser JavaScript"
                ],
                "answer": "It is the underlying C library that implements the event loop, I/O work‑queues and threading abstractions for Node.js, so understanding it helps with diagnosing performance bottlenecks"
            },
            {
                "question": "What does `process.abort()` do in a Node.js application?",
                "options": [
                    "Gracefully shuts down the server",
                    "Immediately ends the process and produces a core‑dump (or equivalent) for debugging",
                    "Pauses the process",
                    "Restarts the process automatically"
                ],
                "answer": "Immediately ends the process and produces a core‑dump (or equivalent) for debugging"
            },
            {
                "question": "What is the benefit of using HTTP/2 multiplexing in Node.js and how might you implement it?",
                "options": [
                    "It loads only one resource at a time",
                    "It allows multiple streams on the same connection, reducing latency; implemented via `http2.createSecureServer()` and pushing multiple streams per connection",
                    "It uses only HTTP/1.1 logic",
                    "It is slower than HTTP/1.1 always"
                ],
                "answer": "It allows multiple streams on the same connection, reducing latency; implemented via `http2.createSecureServer()` and pushing multiple streams per connection"
            },
            {
                "question": "What is “zero copy” in Node.js networking or file I/O and how can it be leveraged?",
                "options": [
                    "Copying data many times between buffers",
                    "Minimizing data copying by using OS features like `sendfile()` or `splice()` to transfer data directly, reducing memory overhead and CPU load",
                    "Always using synchronous operations",
                    "Avoiding buffers entirely"
                ],
                "answer": "Minimizing data copying by using OS features like `sendfile()` or `splice()` to transfer data directly, reducing memory overhead and CPU load"
            },
            {
                "question": "What is a “prototype pollution” vulnerability in Node.js and how can it be exploited?",
                "options": [
                    "When Buffer is not initialized; leads to memory leak",
                    "When the prototype of an object is modified maliciously (e.g., Object.prototype) allowing attacker to influence all objects, potentially leading to RCE",
                    "When an HTTP header is missing; leads to denial of service",
                    "When using callbacks instead of Promises"
                ],
                "answer": "When the prototype of an object is modified maliciously (e.g., Object.prototype) allowing attacker to influence all objects, potentially leading to RCE"
            },
            {
                "question": "How can you prevent Node.js process from crashing due to unhandled promise rejections?",
                "options": [
                    "Ignore them",
                    "Use `process.on('unhandledRejection', handler)` and also `process.on('uncaughtException', handler)` and exit or cleanup gracefully",
                    "Use only try/catch around synchronous code",
                    "Disable Promises"
                ],
                "answer": "Use `process.on('unhandledRejection', handler)` and also `process.on('uncaughtException', handler)` and exit or cleanup gracefully"
            },
            {
                "question": "What is the advantage of using prepared statements in Node.js when interacting with SQL databases?",
                "options": [
                    "They always run faster",
                    "They allow the database to reuse execution plans and help prevent SQL injection, improving performance and security",
                    "They require synchronous code only",
                    "They bypass transaction mechanisms"
                ],
                "answer": "They allow the database to reuse execution plans and help prevent SQL injection, improving performance and security"
            },
            {
                "question": "What is the purpose of `util.inspect.defaultOptions.depth` when debugging large objects in Node.js?",
                "options": [
                    "Sets maximum buffer size",
                    "Controls how deeply nested objects will be printed when using `util.inspect()`",
                    "Sets the number of worker threads",
                    "Controls asynchronous tasks"
                ],
                "answer": "Controls how deeply nested objects will be printed when using `util.inspect()`"
            },
            {
                "question": "In Node.js, what is the significance of `crypto.randomBytes()` and why should you avoid `Math.random()` for cryptographic tokens?",
                "options": [
                    "randomBytes() uses cryptographically secure random values; Math.random() is predictable and not safe for tokens or secrets",
                    "randomBytes() is slower always; Math.random() is faster and safe",
                    "Both are interchangeable",
                    "Math.random() uses OS random"
                ],
                "answer": "randomBytes() uses cryptographically secure random values; Math.random() is predictable and not safe for tokens or secrets"
            },
            {
                "question": "How do you implement service discovery in a Node.js micro‑services architecture?",
                "options": [
                    "Hard‑code each service’s URL",
                    "Use a service registry (like Consul, etcd) and clients or side‑cars in Node.js to query service instances dynamically",
                    "Only use DNS",
                    "Use only environment variables"
                ],
                "answer": "Use a service registry (like Consul, etcd) and clients or side‑cars in Node.js to query service instances dynamically"
            },
            {
                "question": "What is the difference between synchronous and asynchronous garbage collection in Node.js’s V8 engine, and how can it affect your app?",
                "options": [
                    "Synchronous GC pauses the event loop entirely while collecting; asynchronous (incremental) GC allows shorter pauses; heavy memory allocations or retention can cause long pause times damaging latency",
                    "GC doesn’t pause event loop in Node.js",
                    "Only synchronous GC exists",
                    "Only applies to browser"
                ],
                "answer": "Synchronous GC pauses the event loop entirely while collecting; asynchronous (incremental) GC allows shorter pauses; heavy memory allocations or retention can cause long pause times damaging latency"
            },
            {
                "question": "What is `AbortController` and `AbortSignal` used for in Node.js fetch or streams?",
                "options": [
                    "To abort timers only",
                    "To allow cancellation of asynchronous operations like HTTP requests or streams, improving resource cleanup and responsiveness",
                    "To pause worker threads",
                    "To stop cluster workers"
                ],
                "answer": "To allow cancellation of asynchronous operations like HTTP requests or streams, improving resource cleanup and responsiveness"
            },
            {
                "question": "What is head‑of‑line blocking in HTTP/1.x and how does HTTP/2 in Node.js help mitigate it?",
                "options": [
                    "A database lock issue only",
                    "When one request blocks all subsequent ones on same connection; HTTP/2 multiplexes streams so multiple requests can proceed in parallel on one connection, reducing head‑of‑line blocking",
                    "It only applies to WebSockets",
                    "HTTP/2 increases head‑of‑line blocking"
                ],
                "answer": "When one request blocks all subsequent ones on same connection; HTTP/2 multiplexes streams so multiple requests can proceed in parallel on one connection, reducing head‑of‑line blocking"
            },
            {
                "question": "Which Node.js module can you use to perform TLS certificate pinning or validation beyond default behavior?",
                "options": [
                    "tls or https with `checkServerIdentity` callback and `ca` options",
                    "crypto only",
                    "net only",
                    "fs only"
                ],
                "answer": "tls or https with `checkServerIdentity` callback and `ca` options"
            },
            {
                "question": "What is proactive profiling in production Node.js apps and which built‑in feature supports it?",
                "options": [
                    "Profiling once manually only; process.cpuUsage() supports it",
                    "Continuous monitoring with tools like `inspector` module or `perf_hooks.performanceObserver`, heap snapshots, event loop delay, etc., to detect performance regressions early",
                    "Profiling is only for development",
                    "No support exists"
                ],
                "answer": "Continuous monitoring with tools like `inspector` module or `perf_hooks.performanceObserver`, heap snapshots, event loop delay, etc., to detect performance regressions early"
            },
            {
                "question": "What is the effect of calling `server.keepAliveTimeout = 0;` in a Node.js HTTP server?",
                "options": [
                    "Disables keep‑alive so connections close immediately after response, reducing reuse but might reduce resource usage if clients misbehave",
                    "Keeps connection alive forever",
                    "Forces HTTP/2 only",
                    "Resets server"
                ],
                "answer": "Disables keep‑alive so connections close immediately after response, reducing reuse but might reduce resource usage if clients misbehave"
            },
            {
                "question": "What is eventual consistency in microservices architectures and how might that apply to a Node.js service interacting with a distributed datastore?",
                "options": [
                    "All nodes always have same data immediately",
                    "It means that updates propagate asynchronously and the system becomes consistent over time; a Node.js service may read stale data briefly and must handle it",
                    "It means no consistency at all",
                    "Only applies to frontend"
                ],
                "answer": "It means that updates propagate asynchronously and the system becomes consistent over time; a Node.js service may read stale data briefly and must handle it"
            },
            {
                "question": "Which npm flag ensures reproducible installations by ignoring versions outside of `package‑lock.json`?",
                "options": [
                    "--save‑exact",
                    "--frozen‑lockfile",
                    "--no‑install",
                    "--audit‑fix"
                ],
                "answer": "--frozen‑lockfile"
            },
            {
                "question": "What is the security concern when allowing `eval()` or new `Function()` with untrusted input in a Node.js environment?",
                "options": [
                    "Performance only",
                    "It allows execution of arbitrary code, leading to RCE (Remote Code Execution) vulnerability",
                    "It disables worker_threads",
                    "It is only a memory leak risk"
                ],
                "answer": "It allows execution of arbitrary code, leading to RCE (Remote Code Execution) vulnerability"
            },
            {
                "question": "How does `fs.createWriteStream()` differ from `fs.appendFile()` when writing data in Node.js?",
                "options": [
                    "createWriteStream streams data chunks with back‑pressure support; appendFile loads everything then writes, less efficient for large writes or high throughput",
                    "appendFile is asynchronous, createWriteStream is synchronous",
                    "Both behave identical",
                    "appendFile uses promises only"
                ],
                "answer": "createWriteStream streams data chunks with back‑pressure support; appendFile loads everything then writes, less efficient for large writes or high throughput"
            },
            {
                "question": "Why should you avoid synchronous APIs (like `fs.readFileSync()`) in a production‑grade Node.js writable HTTP server?",
                "options": [
                    "They are deprecated completely",
                    "They block the event loop, preventing the server from handling other requests until the operation completes, which degrades concurrency",
                    "They throw errors always",
                    "They only work on Linux"
                ],
                "answer": "They block the event loop, preventing the server from handling other requests until the operation completes, which degrades concurrency"
            },
            {
                "question": "What is the benefit of using `Promise.allSettled()` in a Node.js application over `Promise.all()`?",
                "options": [
                    "It rejects faster",
                    "It waits for all promises to settle (either fulfilled or rejected) and returns their results, enabling you to handle partial failures without immediate rejection",
                    "It only works with asynchronous functions",
                    "It is deprecated"
                ],
                "answer": "It waits for all promises to settle (either fulfilled or rejected) and returns their results, enabling you to handle partial failures without immediate rejection"
            },
            {
                "question": "In the context of Node.js security, what is a “dependency confusion” attack and how can you mitigate it?",
                "options": [
                    "It’s when frontend libraries confuse dependencies",
                    "It’s when attackers push malicious packages to public registry that match internal package names resulting in install; mitigate by using scoped/private packages, lock versions, and auditing dependencies",
                    "It’s a memory leak",
                    "It’s only relevant to browser"
                ],
                "answer": "It’s when attackers push malicious packages to public registry that match internal package names resulting in install; mitigate by using scoped/private packages, lock versions, and auditing dependencies"
            },
            {
                "question": "Which mechanism allows you to perform rate‑limiting per IP or user in a Node.js Express server?",
                "options": [
                    "Using only setTimeout",
                    "Implementing middleware (e.g., express‑rate‑limit) that tracks counts per IP and enforces limits",
                    "Using synchronous blocking loops",
                    "Using only client‑side checks"
                ],
                "answer": "Implementing middleware (e.g., express‑rate‑limit) that tracks counts per IP and enforces limits"
            },
            {
                "question": "What is “event loop drift” and how might you detect it in a Node.js process?",
                "options": [
                    "When the event loop stops forever",
                    "When scheduled timers or setImmediate callbacks start executing later than expected due to heavy load; you can detect it by measuring timer delay‑delta and logging when delays exceed thresholds",
                    "When worker threads fail to start",
                    "When HTTP requests always succeed"
                ],
                "answer": "When scheduled timers or setImmediate callbacks start executing later than expected due to heavy load; you can detect it by measuring timer delay‑delta and logging when delays exceed thresholds"
            },
            {
                "question": "Why might you use `spawnSync()` from child_process in a command‑line tool written in Node.js?",
                "options": [
                    "Because sync API is always faster",
                    "Because you need to run a subprocess and wait for it to finish before continuing, e.g., in a CLI build tool, and the overhead is acceptable",
                    "Because event loop blocking is fine always",
                    "Because worker_threads cannot spawn processes"
                ],
                "answer": "Because you need to run a subprocess and wait for it to finish before continuing, e.g., in a CLI build tool, and the overhead is acceptable"
            },
            {
                "question": "How do you prevent memory leaks due to event listeners in a long‑lived Node.js service?",
                "options": [
                    "Never attach event listeners",
                    "Remove listeners when no longer needed (using emitter.removeListener or emitter.off), avoid attaching listeners in loops without removal, and monitor listener count",
                    "Use only global variables",
                    "Use setInterval eternally"
                ],
                "answer": "Remove listeners when no longer needed (using emitter.removeListener or emitter.off), avoid attaching listeners in loops without removal, and monitor listener count"
            },
            {
                "question": "Which method from `perf_hooks` module helps you measure execution time of synchronous and asynchronous code in Node.js?",
                "options": [
                    "performance.getTime()",
                    "performance.mark()/performance.measure()",
                    "console.time() only",
                    "process.hrtime() only"
                ],
                "answer": "performance.mark()/performance.measure()"
            },
            {
                "question": "What is “data sharding” in a distributed database context and how might a Node.js microservice handle it?",
                "options": [
                    "Splitting database into many small tables only",
                    "Partitioning data horizontally across multiple databases based on key ranges or hashes; Node.js service must route queries to correct shard and handle cross‑shard operations carefully",
                    "Merging all data into one table",
                    "Using only memory database"
                ],
                "answer": "Partitioning data horizontally across multiple databases based on key ranges or hashes; Node.js service must route queries to correct shard and handle cross‑shard operations carefully"
            },
            {
                "question": "Why is it recommended to set `req.setTimeout()` or `server.timeout` in a Node.js HTTP server?",
                "options": [
                    "To increase CPU usage",
                    "To force clients to wait longer",
                    "To prevent hung requests that may block worker threads or connections from resources; allowing freeing of resources after given timeout",
                    "To block keep‑alive entirely"
                ],
                "answer": "To prevent hung requests that may block worker threads or connections from resources; allowing freeing of resources after given timeout"
            },
            {
                "question": "What is “service mesh” and how might it relate to Node.js services in production?",
                "options": [
                    "A UI component for services",
                    "An infrastructure layer that handles service‑to‑service communication (e.g., observability, security, routing) transparently; Node.js services can leverage side‑car proxies like Envoy without embedding networking logic manually",
                    "A database type",
                    "Only relevant to frontend"
                ],
                "answer": "An infrastructure layer that handles service‑to‑service communication (e.g., observability, security, routing) transparently; Node.js services can leverage side‑car proxies like Envoy without embedding networking logic manually"
            },
            {
                "question": "How might you use `BigInt` in Node.js when dealing with 64‑bit integers or large numeric IDs?",
                "options": [
                    "By converting everything to string instead",
                    "By using `BigInt` type (e.g., `123n`) so you don’t lose precision when handling 64‑bit IDs or financial calculations",
                    "By using only Number type always",
                    "By using Buffer only"
                ],
                "answer": "By using `BigInt` type (e.g., `123n`) so you don’t lose precision when handling 64‑bit IDs or financial calculations"
            },
            {
                "question": "What is the risk of enabling `node --inspect` (debug/remote debugging) in a production Node.js process?",
                "options": [
                    "None – it’s safe always",
                    "It exposes a debug port that may allow remote code execution or profiling by unauthorized parties if not secured, so it should be disabled or secured in production",
                    "It makes application faster",
                    "It automatically upgrades to HTTP/2"
                ],
                "answer": "It exposes a debug port that may allow remote code execution or profiling by unauthorized parties if not secured, so it should be disabled or secured in production"
            },
            {
                "question": "Which strategy helps with hot‑reloading code changes in a Node.js micro‑service architecture without restarting downtime?",
                "options": [
                    "Using nodemon only",
                    "Using rolling deployments with zero‑downtime techniques (e.g., cluster or worker processes that restart gracefully, circuit breaker routing to new version, health‑checks, draining of old connections)",
                    "Using synchronous loops",
                    "Using global variables only"
                ],
                "answer": "Using rolling deployments with zero‑downtime techniques (e.g., cluster or worker processes that restart gracefully, circuit breaker routing to new version, health‑checks, draining of old connections)"
            },
            {
                "question": "What is `Symbol.for('nodejs.native_ordering')` (hypothetical) and why might using undocumented symbols be risky in Node.js?",
                "options": [
                    "It is a documented symbol for ordering modules",
                    "Using undocumented internal symbols or APIs may break in future Node.js releases as they are internal and can change without notice",
                    "It is required for worker_threads",
                    "It helps with HTTP/3 only"
                ],
                "answer": "Using undocumented internal symbols or APIs may break in future Node.js releases as they are internal and can change without notice"
            },
            {
                "question": "How can you implement circuit breaker pattern in a Node.js service to handle downstream failures?",
                "options": [
                    "Ignore downstream failures",
                    "Use a library or custom logic that tracks error rate, opens circuit after threshold, rejects fast while downstream recovers, then allows slow re‐tries – improving resilience",
                    "Use only try/catch",
                    "Stop service entirely"
                ],
                "answer": "Use a library or custom logic that tracks error rate, opens circuit after threshold, rejects fast while downstream recovers, then allows slow re‐tries – improving resilience"
            },
            {
                "question": "What is HTTP/3 (QUIC) and is there direct support in Node.js core as of now?",
                "options": [
                    "HTTP/3 is just HTTP/2 renamed; Node.js fully supports it natively",
                    "HTTP/3 uses QUIC over UDP; as of now Node.js has experimental or native support via third‑party modules (e.g., quic), but not full stable native API in many versions",
                    "It is only frontend feature",
                    "It replaces TLS entirely"
                ],
                "answer": "HTTP/3 uses QUIC over UDP; as of now Node.js has experimental or native support via third‑party modules (e.g., quic), but not full stable native API in many versions"
            },
            {
                "question": "When handling large request bodies in a Node.js HTTP server, what strategy can help avoid OOM (out of memory) issues?",
                "options": [
                    "Read entire body into memory always",
                    "Stream the request body (e.g., with `req.pipe()` or parsing in chunks), set maximum content length, and apply back‑pressure or early termination when size exceeds limit",
                    "Disable request body parsing",
                    "Use synchronous parsing"
                ],
                "answer": "Stream the request body (e.g., with `req.pipe()` or parsing in chunks), set maximum content length, and apply back‑pressure or early termination when size exceeds limit"
            },
            {
                "question": "What is side‑car logging in a Node.js micro‑service context?",
                "options": [
                    "Logging when user clicks only",
                    "Using an external process alongside the service to collect logs, metrics and traces, decoupling logging logic from service code and reducing overhead in Node.js process",
                    "Using console.log only",
                    "Using global variables only"
                ],
                "answer": "Using an external process alongside the service to collect logs, metrics and traces, decoupling logging logic from service code and reducing overhead in Node.js process"
            },
            {
                "question": "What is the advantage of using `Intl.RelativeTimeFormat` or `Intl.NumberFormat` in Node.js applications?",
                "options": [
                    "They allow formatting dates and numbers according to locale, removing the need for external libraries like moment or numeral, reducing dependencies and improving maintainability",
                    "They are synchronous only",
                    "They are deprecated",
                    "They only work in browser"
                ],
                "answer": "They allow formatting dates and numbers according to locale, removing the need for external libraries like moment or numeral, reducing dependencies and improving maintainability"
            },
            {
                "question": "What is the main drawback of using `eval()` in Node.js and what safer alternative exists?",
                "options": [
                    "eval() is too slow only; no alternative",
                    "eval() executes arbitrary code and introduces security risks, proxies, `vm.Script` with defined context, or JSON parsing are safer alternatives",
                    "eval() only fails on Windows",
                    "eval() is required in ES modules"
                ],
                "answer": "eval() executes arbitrary code and introduces security risks, proxies, `vm.Script` with defined context, or JSON parsing are safer alternatives"
            },
            {
                "question": "How does an HTTP/2 server handle prior knowledge vs upgrade in Node.js and what might you need to account for?",
                "options": [
                    "There is no difference",
                    "Prior knowledge means client connects via TLS or plain TCP directly speaking HTTP/2; upgrade means HTTP/1.1 -> HTTP/2; you must handle OPTIONS and alternate protocols negotiation and implement fallback accordingly",
                    "HTTP/2 always uses WebSocket",
                    "Node.js doesn’t support HTTP/2"
                ],
                "answer": "Prior knowledge means client connects via TLS or plain TCP directly speaking HTTP/2; upgrade means HTTP/1.1 -> HTTP/2; you must handle OPTIONS and alternate protocols negotiation and implement fallback accordingly"
            },
            {
                "question": "In Node.js, what is “function throttling” and when might you use it in a service?",
                "options": [
                    "Blocking function calls entirely",
                    "Limiting the rate at which a given function can execute (e.g., for high‑frequency events like resize, scroll or incoming API calls) to avoid resource exhaustion or flood",
                    "Using setInterval only",
                    "Only relevant in frontend"
                ],
                "answer": "Limiting the rate at which a given function can execute (e.g., for high‑frequency events like resize, scroll or incoming API calls) to avoid resource exhaustion or flood"
            },
            {
                "question": "Why is it important to set up a health‑check endpoint (e.g., `/health` or `/ready`) in a Node.js micro‑service running in Kubernetes?",
                "options": [
                    "For styling only",
                    "To allow the orchestration system (Kubernetes) to probe whether the service is ready or live, enabling proper routing, rolling updates, recovery and minimize downtime",
                    "To list API keys only",
                    "It is optional always"
                ],
                "answer": "To allow the orchestration system (Kubernetes) to probe whether the service is ready or live, enabling proper routing, rolling updates, recovery and minimize downtime"
            },
            {
                "question": "What does `fs.open(path, flags, mode, callback)` ‘mode’ parameter specify in Node.js?",
                "options": [
                    "I/O speed",
                    "File permission bits for newly created files if `flags` includes write/create",
                    "Number of threads",
                    "Encoding"
                ],
                "answer": "File permission bits for newly created files if `flags` includes write/create"
            },
            {
                "question": "What is the role of an API Gateway when deploying many Node.js services and how does it improve architecture?",
                "options": [
                    "It replaces Node.js services entirely",
                    "It manages routing, load balancing, authentication, rate‑limiting, and service composition at the edge, reducing coupling between clients and micro‑services",
                    "It only handles frontend assets",
                    "It is only a database proxy"
                ],
                "answer": "It manages routing, load balancing, authentication, rate‑limiting, and service composition at the edge, reducing coupling between clients and micro‑services"
            },
            {
                "question": "Why would you use `Socket.bytesRead` and `Socket.bytesWritten` on a net.Socket in Node.js?",
                "options": [
                    "To write bytes only",
                    "To monitor the number of bytes read or written over the socket, useful for accounting, throttling or logging",
                    "To encrypt data",
                    "To spawn more threads"
                ],
                "answer": "To monitor the number of bytes read or written over the socket, useful for accounting, throttling or logging"
            },
            {
                "question": "How do you implement multipart file upload streaming in Node.js without loading the full file into memory?",
                "options": [
                    "Using `fs.readFile()` then upload",
                    "Using streams and modules like ‘busboy’ or ‘multer’ with streaming to disk or cloud storage, handling back‑pressure",
                    "Using `http.request()` only",
                    "Loading file into buffer always"
                ],
                "answer": "Using streams and modules like ‘busboy’ or ‘multer’ with streaming to disk or cloud storage, handling back‑pressure"
            },
            {
                "question": "What is the difference between `Buffer.alloc()` and `Buffer.allocUnsafe()` in Node.js?",
                "options": [
                    "allocUnsafe() zero‑fills the memory; alloc() does not",
                    "allocUnsafe() returns uninitialized memory (faster but potentially insecure), alloc() returns zero‑filled memory",
                    "They are identical",
                    "alloc() is deprecated"
                ],
                "answer": "allocUnsafe() returns uninitialized memory (faster but potentially insecure), alloc() returns zero‑filled memory"
            },
            {
                "question": "What is “horizontal scaling” and how might you scale a Node.js service horizontally?",
                "options": [
                    "Running on a more powerful single server",
                    "Adding more instances across multiple machines/processes behind a load‑balancer, using cluster or container instances, sharing stateless design, externalizing session state for horizontal scale",
                    "Using only worker_threads",
                    "Using synchronous code only"
                ],
                "answer": "Adding more instances across multiple machines/processes behind a load‑balancer, using cluster or container instances, sharing stateless design, externalizing session state for horizontal scale"
            },
            {
                "question": "What is the purpose of `process.setUncaughtExceptionCaptureCallback()` in Node.js 14+?",
                "options": [
                    "To capture uncaught exceptions in a custom callback instead of default behaviour and allow cleanup before exiting",
                    "To ignore all exceptions silently",
                    "To convert errors into warnings",
                    "To disable heap dumps"
                ],
                "answer": "To capture uncaught exceptions in a custom callback instead of default behaviour and allow cleanup before exiting"
            },
            {
                "question": "Which metric is most relevant when profiling Node.js latency for event‑loop responsiveness?",
                "options": [
                    "Memory usage only",
                    "CPU usage only",
                    "Event loop delay/latency (time between scheduling and actual execution) is key to REACTIVENESS",
                    "Disk usage only"
                ],
                "answer": "Event loop delay/latency (time between scheduling and actual execution) is key to REACTIVENESS"
            },
            {
                "question": "In a Node.js application, what is the meaning of ‘stateless’ and why is it beneficial for micro‑services?",
                "options": [
                    "No sessions used only",
                    "Each request is independent and server keeps no user‑state in memory between requests; beneficial because any instance can handle any request and instances can scale/fail independently",
                    "No databases used",
                    "Only frontend concept"
                ],
                "answer": "Each request is independent and server keeps no user‑state in memory between requests; beneficial because any instance can handle any request and instances can scale/fail independently"
            },
            {
                "question": "Why should you prefer `import()` dynamic module loading over static require in certain Node.js modules?",
                "options": [
                    "import() always runs faster",
                    "Dynamic import lets you load modules only when needed, reduce startup time, memory footprint, enable code‑splitting or conditional loading",
                    "require() is deprecated",
                    "import() blocks the event loop"
                ],
                "answer": "Dynamic import lets you load modules only when needed, reduce startup time, memory footprint, enable code‑splitting or conditional loading"
            },
            {
                "question": "What is the role of `.npmrc` file in a Node.js project and how can you use it for security or reproducibility?",
                "options": [
                    "It is only for global config",
                    "It can configure registry, lock authentication tokens, set default package install flags, enforce package policies (e.g., `strict‑ssl=true` or `save‑exact=true`), improving reproducibility and security",
                    "It replaces package.json",
                    "It is auto‑deleted"
                ],
                "answer": "It can configure registry, lock authentication tokens, set default package install flags, enforce package policies (e.g., `strict‑ssl=true` or `save‑exact=true`), improving reproducibility and security"
            },
            {
                "question": "What is “blue‑green deployment” and how might you implement it for a Node.js service in Kubernetes?",
                "options": [
                    "Deploying both colors of code only",
                    "Having two identical environments (blue & green), directing traffic to one while updating the other and switching, ensuring zero‑downtime; Node.js service runs in both pods and Kubernetes service points to currently active version",
                    "Only for frontend",
                    "Always requires worker_threads"
                ],
                "answer": "Having two identical environments (blue & green), directing traffic to one while updating the other and switching, ensuring zero‑downtime; Node.js service runs in both pods and Kubernetes service points to currently active version"
            },
            {
                "question": "What is the significance of `fs.fdatasync()` vs `fs.fsync()` in Node.js when writing files?",
                "options": [
                    "No difference",
                    "fdatasync() flushes file data only (not metadata) to disk, often faster; fsync() flushes both data and metadata, safer but slower",
                    "fdatasync writes asynchronously only",
                    "fdatasync is deprecated"
                ],
                "answer": "fdatasync() flushes file data only (not metadata) to disk, often faster; fsync() flushes both data and metadata, safer but slower"
            },
            {
                "question": "Why is the `--inspect‑brk` flag used when starting Node.js and how is it useful in debugging?",
                "options": [
                    "It disables the inspector",
                    "It starts the debugging inspector and breaks at first line, allowing you to connect a debugger before any code runs, helping inspect startup code or early global initialization",
                    "It boosts performance only",
                    "It only works on Windows"
                ],
                "answer": "It starts the debugging inspector and breaks at first line, allowing you to connect a debugger before any code runs, helping inspect startup code or early global initialization"
            },
            {
                "question": "What is the recommended way to manage secret or sensitive configuration (API keys, DB passwords) in production Node.js applications?",
                "options": [
                    "Hard‑code in code",
                    "Use environment variables or secret management solutions (like Vault, AWS Secrets Manager), avoid storing in source control, and rotate regularly",
                    "Send via request query string",
                    "Store in public GitHub repo"
                ],
                "answer": "Use environment variables or secret management solutions (like Vault, AWS Secrets Manager), avoid storing in source control, and rotate regularly"
            },
            {
                "question": "In Node.js, how does `Buffer.byteLength()` help you before sending a response?",
                "options": [
                    "It sets memory limit only",
                    "It calculates number of bytes of a string or buffer which helps set accurate `Content‑Length` header for HTTP responses or manage payload size",
                    "It is deprecated",
                    "It only works in browser"
                ],
                "answer": "It calculates number of bytes of a string or buffer which helps set accurate `Content‑Length` header for HTTP responses or manage payload size"
            }
        ]
    }
}

const uploadData = async () => {
    for (const [courseName, levels] of Object.entries(data)) {

        //course Id
        let courseId;

        // check for existing course and get id
        const course = await Course.findOne({ courseName })
       

        // create new course if it doesn't exist and store id
        if (!course) {
            const newCourse = new Course({
                courseName
            })
            await newCourse.save();
            courseId = newCourse._id
        } else {
            courseId = course._id
        }

        for (const [level, questions] of Object.entries(levels)) {
            const allQuestions = questions.map((item) => ({
                courseId,
                level: level,
                question: item.question,
                options: item.options,
                answer: item.answer
            }));
            await Question.insertMany(allQuestions)
            console.log(`Inserted ${allQuestions.length} ${level} for ${courseName}`)
        }
    }
}

export default uploadData;


