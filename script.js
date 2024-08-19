// Password Generator
function generatePassword() {
    const length = document.getElementById('length').value;
    const includeUppercase = document.getElementById('includeUppercase').checked;
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const includeSpecial = document.getElementById('includeSpecial').checked;
    
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';
    
    let chars = lowercaseChars;
    if (includeUppercase) chars += uppercaseChars;
    if (includeNumbers) chars += numberChars;
    if (includeSpecial) chars += specialChars;
    
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }
    
    document.getElementById('generatedPassword').textContent = `Generated Password: ${password}`;
}

// Password Strength Checker
function checkPasswordStrength() {
    const password = document.getElementById('passwordToCheck').value;
    let strength = 0;
    
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    
    let message;
    switch (strength) {
        case 1: message = 'Weak'; break;
        case 2: message = 'Moderate'; break;
        case 3: message = 'Strong'; break;
        case 4: message = 'Very Strong'; break;
        default: message = 'Too Short';
    }
    
    document.getElementById('passwordStrength').textContent = `Password Strength: ${message}`;
}

// Password Manager
function savePassword() {
    const website = document.getElementById('website').value;
    const password = document.getElementById('password').value;
    localStorage.setItem(`password_${website}`, password);
    document.getElementById('passwordMessage').textContent = 'Password saved!';
}

function getPassword() {
    const website = document.getElementById('website').value;
    const password = localStorage.getItem(`password_${website}`);
    if (password) {
        document.getElementById('passwordMessage').textContent = `Password for ${website}: ${password}`;
    } else {
        document.getElementById('passwordMessage').textContent = 'Password not found!';
    }
}

function deletePassword() {
    const website = document.getElementById('website').value;
    if (localStorage.getItem(`password_${website}`)) {
        localStorage.removeItem(`password_${website}`);
        document.getElementById('passwordMessage').textContent = 'Password deleted!';
    } else {
        document.getElementById('passwordMessage').textContent = 'Password not found!';
    }
}

// Custom Text
function saveCustomText() {
    const customText = document.getElementById('customText').value;
    localStorage.setItem('customText', customText);
    alert('Custom text saved!');
}

// Location Manager
function saveLocation() {
    const item = document.getElementById('item').value;
    const location = document.getElementById('location').value;
    localStorage.setItem(`location_${item}`, location);
    document.getElementById('locationMessage').textContent = 'Location saved!';
}

function getLocation() {
    const item = document.getElementById('item').value;
    const location = localStorage.getItem(`location_${item}`);
    if (location) {
        document.getElementById('locationMessage').textContent = `Location of ${item}: ${location}`;
    } else {
        document.getElementById('locationMessage').textContent = 'Location not found!';
    }
}

function updateLocation() {
    const item = document.getElementById('item').value;
    const location = document.getElementById('location').value;
    if (localStorage.getItem(`location_${item}`)) {
        localStorage.setItem(`location_${item}`, location);
        document.getElementById('locationMessage').textContent = 'Location updated!';
    } else {
        document.getElementById('locationMessage').textContent = 'Location not found!';
    }
}
