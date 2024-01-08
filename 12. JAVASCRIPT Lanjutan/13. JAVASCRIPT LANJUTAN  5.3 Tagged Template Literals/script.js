// Tagged Template
// const nama = 'Sandhika Galih';
// const umur = 33;

// function coba(strings, ...values) {
//     // let result = '';
//     // strings.forEach((str, i) => {
//     //     result += `${str}${values[i] || ''}`;
//     // });
//     // return result;

//     return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
// }

// const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun.`;
// console.log(str);

// Highlight

const nama = "Sandhika Galih";
const umur = 33;
const email = "sandhikagalih@unpas.ac.id";

function highlight(strings, ...values) {
  return strings.reduce(
    (result, str, i) =>
      `${result}${str}<span class="hl">${values[i] || ""}</span>`,
    ""
  );
}

const str = highlight`Halo, nama saya ${nama}, saya ${umur} tahun, dan email saya adalah : ${email} `;
document.body.innerHTML = str;

// contoh Escapeing / Sanitize HTML Tags
// function sanitize(strings, ...values) {
//     return DOMPurify.sanitize(aboutMe);
// }

// const name = 'petyr baelish';
// const aboutMe = `I love to do evil <img src="http://unsplash.it/100/100?random" onload="alert('I hacked you. Haha');" />`;

// const html = sanitize`
//         <h3>${name}</h3>
//         <p>${aboutMe}</p>
//     `;

// Translation & internationalization
// const html = i18n`Hello ${name}, you have ${amount}:c in your bank account.`;

// hasil nya =  Hallo Steffen, Sie haben US$ 1,250,33 auf Ihrem Bankkonto.

// Styled Components
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
