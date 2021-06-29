import { createGlobalStyle } from "styled-components"

/* eslint-disable */
export const GlobalStyle = createGlobalStyle`
/* Fonts */
@font-face {
  font-family: 'Karla';
  font-style: normal;
  font-weight: 300;
  src: url('${process.env.REACT_APP_PUBLIC_URL}/fonts/karla-light.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, 
  U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

@font-face {
  font-family: 'Karla';
  font-style: normal;
  font-weight: 500;
  src: url('${process.env.REACT_APP_PUBLIC_URL}/fonts/karla-medium.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, 
  U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

:root {
  /* Variables */
  /* -Colours- */
  --white: #fcfeff;
  --orange: #f58220;
  --lightBlue: #00b7f0;
  --blue: #01589c;
  --darkBlue: #04183c;
  --black: #00171f;
  --grey: #bfbfbf;
  --lightGrey: #f2f4f6;
  /* Defaults */
  --bg-primary: var(--white);
  --bg-secondary: var(--darkBlue);
  --bg-black: var(--black);
  --bg-accent: var(--orange);
  --text-primary: var(--black);
  --text-secondary: var(--white);
  --text-accent: var(--orange);
  --link-primary: var(--darkBlue);
  --link-medium: var(--orange);
  --link-light: var(--lightBlue);
  /* CTA */
  --cta-light-background: var(--orange);
  --cta-medium-background: var(--blue);
  --cta-dark-background: var(--darkBlue);
  --cta-light-text: var(--white);
  --cta-medium-text: var(--orange);
  --cta-dark-text: var(--black);
  --cta-border-dark: var(--black);
  --cta-border-medium: var(--orange);
  --cta-border-light: var(--white);
  /* Type */
  --text-font-family: 'Karla', sans-serif;
  --heading-font-family: 'Karla', sans-serif;
  --h1: 2em;
  --h2: 1.75em;
  --h3: 1.66em;
  --h4: 1.5em;
  --h5: 1.33em;
  --h6: 1.25em;
  --cta: 1.15em;
  --pText: 1.15em;
  --inputText: 1em;
  --base-text-size: 1rem;
  
  --base-size: 8px;
  --base-size-half: calc(var(--base-size) / 2);
  --base-size-quarter: calc(var(--base-size) / 4);
  --base-size-x2: calc(var(--base-size) * 2);
  --base-size-x3: calc(var(--base-size) * 3);
  --base-size-x4: calc(var(--base-size) * 4);
  --base-size-x6: calc(var(--base-size) * 6);
  --base-size-x8: calc(var(--base-size) * 8);

  --smallText: .8em;
  /* Elevation */
  --box-shadow: 0 0 10px 2px rgba(0, 25, 40, .4);
  --level-1:	0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --level-2: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --level-3: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --level-4: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  --shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
  --shadow-inner-heavy: inset 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  --shadow-outline: 0 0 0 3px rgba(66, 153, 225, 0.5);
  /* Sizes */
  --border-radius: calc(var(--base-text-size) / 5);
  --padding: 1em;
  --smallLargePadding: calc(var(--padding) / 2) var(--padding);
  --margin: 1.5em;
  --max-basis-font: 24px;
  --line-height: 1.5;
  --desktop: 48em;
  --mobile: 26em;

  --header-height: 3rem;
  /* Other */
  font-size: 100%;

}
@media screen and (min-width: 60rem) {
  :root {
    font-size: var(--max-basis-font);
  }
}
/* Normalize */
html {
  box-sizing: border-box;
	-webkit-text-size-adjust: 100%;
  font-weight: 300;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
p + p,
h1 + p,
h2 + p,
h3 + p {
  margin-top: var(--margin);
}
li + li,
dl + dd,
dd + dt,
dt + dd,
h4 + p,
h5 + p {
  margin-top: calc(var(--margin) / 2);
}
body {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  font-size: var(--base-text-size);
  line-height: var(--line-height);
  font-family: var(--text-font-family);
	line-height: var(--line-height);
	margin: 0;
  display: grid;
  grid-template-rows: 1fr;
  height: 100vh;
}
#root {
  display: grid;
}
main {
	display: block
}
h1 {
	font-size: var(--h1);
	margin: calc(var(--h1) / 3) 0;
}
h2 {
	font-size: var(--h2);
	margin: calc(var(--h2) / 3) 0;
}
h3 {
	font-size: var(--h3);
	margin: calc(var(--h3) / 3) 0;
}
h4 {
	font-size: var(--h4);
	margin: calc(var(--h4) / 3) 0;
}
h5 {
	font-size: var(--h5);
	margin: calc(var(--h5) / 3) 0;
}
h1, h2, h3, h4, h5 {
  font-family: var(--heading-font-family);
}
hr {
	box-sizing: content-box;
	height: 0;
	overflow: visible
}
pre {
	font-family: monospace, monospace;
	font-size: var(--pText);
  white-space: pre-wrap;
}
a {
	background-color: transparent;
  color: var(--link-primary);
  font-weight: 500;
}
a:hover {
  color: var(--link-medium);
  text-decoration: underline;
  text-decoration-skip: skip;
  transition: all .2s ease-in;
}
abbr[title] {
	border-bottom: none;
	text-decoration: underline;
	text-decoration: underline dotted
}
b,
strong {
	font-weight: bolder
}
small {
	font-size: 80%
}
sub,
sup {
	font-size: 75%;
	line-height: 0;
	position: relative;
	vertical-align: baseline
}
sub {
	bottom: -.25em
}
sup {
	top: -.5em
}
img {
	border-style: none
}
button,
input,
optgroup,
select,
textarea {
  border: 1px solid;
	font-family: inherit;
  font-size: var(--inputText);
	margin: 0;
  margin-bottom: var(--margin);
  padding: calc(var(--padding) / 2);
}
button,
input {
	overflow: visible
}
button,
select {
	text-transform: none
}
[type=button],
[type=reset],
[type=submit],
button {
  appearance: none;
  background-color: var(--cta-medium-background);
  border-color: transparent;
  border-radius: var(--border-radius);
  box-shadow: var(--level-2);
  color: var(--cta-light-text);
  cursor: pointer;
  font-size: var(--base-text-size);
  padding: var(--smallLargePadding);
  text-transform: uppercase;
}
[type=button]:hover,
[type=reset]:hover,
[type=submit]:hover,
button:hover {
  border-color: var(--cta-dark-background);
  box-shadow: var(--level-3);
}
[type=button][disabled],
[type=reset][disabled],
[type=submit][disabled],
button[disabled] {
  background-color: var(--grey);
  color: var(--text-primary);
  pointer-events: none;
  box-shadow: var(--level-1);
}
[type=button]:active,
[type=reset]:active,
[type=submit]:active,
button:active {
  box-shadow: var(--shadow-inner-heavy);
  outline: 0;
  transform: translate(0, 2px) scale(0.98);
}
fieldset {
	padding: .35em .75em .625em
}
fieldset div {
  display: flex;
  flex-direction: column;
}
legend {
	box-sizing: border-box;
	color: inherit;
	display: table;
	max-width: 100%;
	padding: 0;
	white-space: normal
}
progress {
	vertical-align: baseline
}
q {
  quotes: "“" "”";
}
textarea {
	overflow: auto
}
[type=checkbox],
[type=radio] {
	box-sizing: border-box;
  margin-right: 5px;
	padding: 0;
}
[type=search] {
	-webkit-appearance: textfield;
	outline-offset: -2px
}
button:focus,
input:focus,
select:focus,
textarea:focus {
  outline: none;
}
details {
	display: block
}
summary {
	display: list-item
}
template {
	display: none
}
[hidden] {
	display: none
}
blockquote {
  margin: 10px;
  padding: var(--padding);
}
label {
  display: block;
  font-size: var(--pText);
}
::placeholder {
  color: var(--grey);
}

`
