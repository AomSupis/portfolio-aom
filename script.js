function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".menu-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// function setupPdfModal(pdfPath) {
//   const mask = document.getElementById('mask');
//   const pdfButton = document.getElementById('open-pdf-button');
//   const pdfModal = document.getElementById('pdf-modal');
//   const pdfIframe = document.getElementById('pdf-iframe');
//   const closeButton = document.querySelector('.close-button');

//   if (!mask || !pdfButton || !pdfModal || !pdfIframe || !closeButton) {
//     console.error('Missing one or more required elements.');
//     return;
//   }

//   // Open the panel when the button is clicked
//   pdfButton.addEventListener('click', () => {
//     pdfIframe.src = pdfPath;          // Use argument
//     pdfModal.classList.add('is-visible');
//     mask.classList.add('is-visible-mask');
//   });

//   // Close the panel when the close button is clicked
//   closeButton.addEventListener('click', () => {
//     pdfModal.classList.remove('is-visible');
//     mask.classList.remove('is-visible-mask');
//     pdfIframe.src = '';
//   });

//   // Close the panel if the user clicks outside
//   window.addEventListener('click', (event) => {
//     if (!pdfModal.contains(event.target) && !pdfButton.contains(event.target)) {
//       pdfModal.classList.remove('is-visible');
//       mask.classList.remove('is-visible-mask');
//       pdfIframe.src = '';
//     }
//   });
// }

// document.addEventListener('DOMContentLoaded', () => {
//   setupPdfModal('./assets/report.pdf');
// });

// document.addEventListener('DOMContentLoaded', () => {
//   setupPdfModal('./assets/report-2.pdf');
// });

document.addEventListener('DOMContentLoaded', () => {
     const mask = document.getElementById('mask'); 
     const pdfButton = document.getElementById('open-pdf-button'); 
     const pdfModal = document.getElementById('pdf-modal'); 
     const pdfIframe = document.getElementById('pdf-iframe'); 
     const closeButton = document.querySelector('.close-button'); 
     const pdfPath = 'assets/report.pdf'; 

     // Open the panel when the button is clicked 
     pdfButton.addEventListener('click', () => { 
        pdfIframe.src = pdfPath; 
        // Set the iframe source 
        pdfModal.classList.add('is-visible'); 
        // Add the class to slide it in 
        mask.classList.add('is-visible-mask'); 
        // Show the mask
    }); 
    // Close the panel when the close button is clicked 
    closeButton.addEventListener('click', () => { 
        console.log('Close button clicked');
        pdfModal.classList.remove('is-visible'); // Remove the class to slide it out 
        mask.classList.remove('is-visible-mask'); // Show the mask 
        pdfIframe.src = ''; // Optional: clear the iframe to stop loading 
    }); // Close the panel if the user clicks outside of the panel content window.addEventListener('click', (event) => { if (!pdfModal.contains(event.target) && !pdfButton.contains(event.target)) { pdfModal.classList.remove('is-visible'); mask.classList.remove('is-visible-mask'); // Show the mask 
        pdfIframe.src = ''; 

    window.addEventListener('click', (event) => {
        if (!pdfModal.contains(event.target) && !pdfButton.contains(event.target)) {
        pdfModal.classList.remove('is-visible');
        mask.classList.remove('is-visible-mask');
        pdfIframe.src = '';
        }
    });
}); 

document.addEventListener('DOMContentLoaded', () => {
     const mask = document.getElementById('mask2'); 
     const pdfButton = document.getElementById('open-pdf-button-2'); 
     const pdfModal = document.getElementById('pdf-modal-2'); 
     const pdfIframe = document.getElementById('pdf-iframe-2'); 
     const closeButton = document.getElementById('close-2'); 
     const pdfPath = 'assets/report-2.pdf'; 

     // Open the panel when the button is clicked 
     pdfButton.addEventListener('click', () => { 
        pdfIframe.src = pdfPath; 
        // Set the iframe source 
        pdfModal.classList.add('is-visible'); 
        // Add the class to slide it in 
        mask.classList.add('is-visible-mask'); 
        // Show the mask
    }); 
    // Close the panel when the close button is clicked 
    closeButton.addEventListener('click', () => { 
        console.log('Close button clicked');
        pdfModal.classList.remove('is-visible'); // Remove the class to slide it out 
        mask.classList.remove('is-visible-mask'); // Show the mask 
        pdfIframe.src = ''; // Optional: clear the iframe to stop loading 
    }); // Close the panel if the user clicks outside of the panel content window.addEventListener('click', (event) => { if (!pdfModal.contains(event.target) && !pdfButton.contains(event.target)) { pdfModal.classList.remove('is-visible'); mask.classList.remove('is-visible-mask'); // Show the mask 
        pdfIframe.src = ''; 
    
    window.addEventListener('click', (event) => {
        if (!pdfModal.contains(event.target) && !pdfButton.contains(event.target)) {
            pdfModal.classList.remove('is-visible');
            mask.classList.remove('is-visible-mask');
            pdfIframe.src = '';
        }
    });
}); 

document.addEventListener('DOMContentLoaded', () => {
     const mask = document.getElementById('mask3'); 
     const pdfButton = document.getElementById('open-pdf-button-3'); 
     const pdfModal = document.getElementById('pdf-modal-3'); 
     const pdfIframe = document.getElementById('pdf-iframe-3'); 
     const closeButton = document.getElementById('close-3'); 
     const pdfPath = 'assets/report-3.pdf'; 

     // Open the panel when the button is clicked 
     pdfButton.addEventListener('click', () => { 
        pdfIframe.src = pdfPath; 
        // Set the iframe source 
        pdfModal.classList.add('is-visible'); 
        // Add the class to slide it in 
        mask.classList.add('is-visible-mask'); 
        // Show the mask
    }); 
    // Close the panel when the close button is clicked 
    closeButton.addEventListener('click', () => { 
        console.log('Close button clicked');
        pdfModal.classList.remove('is-visible'); // Remove the class to slide it out 
        mask.classList.remove('is-visible-mask'); // Show the mask 
        pdfIframe.src = ''; // Optional: clear the iframe to stop loading 
    }); // Close the panel if the user clicks outside of the panel content window.addEventListener('click', (event) => { if (!pdfModal.contains(event.target) && !pdfButton.contains(event.target)) { pdfModal.classList.remove('is-visible'); mask.classList.remove('is-visible-mask'); // Show the mask 
        pdfIframe.src = ''; 
    
    window.addEventListener('click', (event) => {
        if (!pdfModal.contains(event.target) && !pdfButton.contains(event.target)) {
            pdfModal.classList.remove('is-visible');
            mask.classList.remove('is-visible-mask');
            pdfIframe.src = '';
        }
    });
}); 