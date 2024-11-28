async function handleForm(event, formId, url) {
    event.preventDefault();  // Prevent default form submission

    try {
        // Initialize CSRF cookie for mobile devices
        await fetch('/sanctum/csrf-cookie');

        // Fetch CSRF token
        const csrfResponse = await fetch('/csrf-token', {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });

        if (!csrfResponse.ok) {
            throw new Error('Failed to fetch CSRF token');
        }

        const csrfData = await csrfResponse.json();
        const csrfToken = csrfData.csrfToken;

        // Collect form data
        const formData = new FormData(document.getElementById(formId));

        // Set up the request options
        const requestOptions = {
            method: 'POST',
            headers: {
                'X-CSRF-TOKEN': csrfToken,
                'Accept': 'application/json'
            },
            body: formData
        };

        // Submit the form using fetch
        const response = await fetch(url, requestOptions);

        // Check if response is OK
        if (response.ok) {
            const responseData = await response.json();
            console.log('Success:', responseData);

            // Show the success popup without hiding the form
            document.getElementById('successPopup').classList.remove('hidden');
        } else {
            const errorData = await response.json();
            console.error('Error:', errorData);

            // Show the error popup
            document.getElementById('errorPopup').classList.remove('hidden');
        }

    } catch (error) {
        console.error('Caught error:', error);
        document.getElementById('errorPopup').classList.remove('hidden');
    }
}

// Function to safely attach event listeners
function addFormListener(formId, handler) {
    const formElement = document.getElementById(formId);
    if (formElement) {
        formElement.addEventListener('submit', handler);
    }
}

// Event listeners for each form
addFormListener('apply', function (event) {
    handleForm(event, 'apply', '/admin/mail/apply/send');
});