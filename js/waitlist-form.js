function showError(message) {
    const errorMessage = document.getElementById('errorMessage');
    const errorText = document.getElementById('errorText');
    
    if (errorMessage && errorText) {
        errorText.textContent = message;
        errorMessage.style.display = 'block';
        errorMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

function hideError() {
    const errorMessage = document.getElementById('errorMessage');
    
    if (errorMessage) {
        errorMessage.style.display = 'none';
    }
}

function submitWaitlistForm(event) {
    event.preventDefault();
    
    const form = event.target;
    const emailInput = form.querySelector('input[name="fields[email]"]');
    const nameInput = form.querySelector('input[name="fields[name]"]');
    const currentRoleSelect = form.querySelector('select[name="fields[current_role]"]');
    const painPointsCheckboxes = form.querySelectorAll('input[name="fields[pain_points][]"]:checked');
    const timeToValueSelect = form.querySelector('select[name="fields[time_to_value]"]');
    const usageFrequencySelect = form.querySelector('select[name="fields[iris_use_frequency]"]');
    const feedbackFrequencySelect = form.querySelector('select[name="fields[feedback_frequency]"]');
    
    // Hide any previous errors
    hideError();
    
    // Validate required fields
    if (!emailInput.value || !emailInput.value.includes('@')) {
        showError('Oops! We need a valid email address to add you to the waitlist.');
        return;
    }
    
    if (!nameInput.value.trim()) {
        showError('We\'d love to know your name! Please add it above.');
        return;
    }
    
    if (!currentRoleSelect.value) {
        showError('Please let us know your current role so we can tailor Iris for you.');
        return;
    }
    
    if (painPointsCheckboxes.length === 0) {
        showError('Help us understand how Iris can best serve you by selecting at least one option.');
        return;
    }
    
    if (!timeToValueSelect.value) {
        showError('Please share your time-to-value expectation for new tools.');
        return;
    }
    
    if (!usageFrequencySelect.value) {
        showError('Please let us know how likely you are to use Iris during Early Access.');
        return;
    }
    
    if (!feedbackFrequencySelect.value) {
        showError('Please tell us about your willingness to provide feedback during Early Access.');
        return;
    }
    
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Joining...';
    submitBtn.disabled = true;
    
    // Prepare form data
    const painPointsValues = Array.from(painPointsCheckboxes).map(cb => cb.value);
    const formData = new URLSearchParams();
    formData.append('fields[email]', emailInput.value);
    formData.append('fields[name]', nameInput.value);
    formData.append('fields[current_role]', currentRoleSelect.value);
    painPointsValues.forEach(value => formData.append('fields[pain_points][]', value));
    formData.append('fields[time_to_value]', timeToValueSelect.value);
    formData.append('fields[iris_use_frequency]', usageFrequencySelect.value);
    formData.append('fields[feedback_frequency]', feedbackFrequencySelect.value);
    formData.append('ml-submit', '1');
    formData.append('anticsrf', 'true');
    
    console.log('Form data being sent:', formData.toString());
    
    // Send to MailerLite
    fetch('https://assets.mailerlite.com/jsonp/1749703/forms/165352906992649259/subscribe', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString()
    })
    .then(response => {
        console.log('Response status:', response.status);
        console.log('Response ok:', response.ok);
        
        if (response.ok) {
            // Show success message and hide form elements
            const formContainer = form.closest('.ml-form-embedBody');
            const wrapper = formContainer.closest('.ml-form-embedWrapper');
            const successMessage = wrapper.querySelector('.ml-form-successBody');
            const formContent = formContainer.querySelector('.ml-form-formContent');
            
            // Also hide the page heading and description
            const pageHeading = document.querySelector('.form-title');
            const pageDescription = document.querySelector('.form-subtitle');
            
            console.log('Form container:', formContainer);
            console.log('Wrapper:', wrapper);
            console.log('Success message:', successMessage);
            console.log('Form content:', formContent);
            console.log('Page heading:', pageHeading);
            console.log('Page description:', pageDescription);
            
            if (successMessage && formContent) {
                successMessage.style.display = 'block';
                formContent.style.display = 'none';
                
                // Also hide the submit button area
                const submitArea = formContainer.querySelector('.ml-form-embedSubmit');
                if (submitArea) submitArea.style.display = 'none';
                
                // Hide page elements
                if (pageHeading) pageHeading.style.display = 'none';
                if (pageDescription) pageDescription.style.display = 'none';
                
                console.log('Success message shown, form, button, and page elements hidden');
                
                // Scroll to success message
                successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } else {
                console.error('Success message or form content element not found');
            }
        } else {
            console.error('Response not ok:', response.status, response.statusText);
            showError('Something went wrong on our end. Please try again in a moment.');
        }
        
        // Reset button state
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    })
    .catch(error => {
        console.error('Waitlist submission error:', error);
        showError('We\'re having trouble connecting. Please check your internet connection and try again.');
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    });
}
