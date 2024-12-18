import classes from "./Contacts.module.css";

export default function setupContactsFormHandler() {
    const form = document.getElementById('form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('passwordInput');
    const passwordCheckInput = document.getElementById('passwordCheck');
    const strengthBlocks = [
        document.getElementById('passwordCheck'),
        document.getElementById('passwordCheck1'),
        document.getElementById('passwordCheck2'),
        document.getElementById('passwordCheck3'),
    ].filter(Boolean) as HTMLDivElement[];
    const errorClass = `${classes.inputError}`;

    if (!form) {
        return "No form";
    }
    if (!emailInput) {
        return "No email input field";
    }
    if (!passwordInput) {
        return "No password input field";
    }

    if (!strengthBlocks) {
        return "No password strength display";
    }

    // Email Validation
    emailInput.addEventListener('input', () => {
        const emailValue = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailValue) || emailValue.length > 25) {
            emailInput.classList.add(errorClass);
        } else {
            emailInput.classList.remove(errorClass);
        }
    });

    // Password Strength Validation
    passwordInput.addEventListener('input', () => {
        const passwordValue = passwordInput.value.trim();
        const strength = calculatePasswordStrength(passwordValue);

        strengthBlocks.forEach((block, index) => {
            if (strength > index * 25) {
                block.style.backgroundColor = getStrengthColor(strength);
            } else {
                block.style.backgroundColor = '#EFEFEF';
            }
        });

    });

    document.addEventListener('DOMContentLoaded', () => {
        const togglePasswordButton = document.getElementById('togglePassword');

        togglePasswordButton.addEventListener('click', () => {
            const isPasswordVisible = passwordInput.type === 'text';
            passwordInput.type = isPasswordVisible ? 'password' : 'text';
        });
    });

    function calculatePasswordStrength(password: string): number {
        let strength = 0;
        if (password.length >= 8) strength += 20;
        if (/[a-z]/.test(password)) strength += 20;
        if (/[A-Z]/.test(password)) strength += 20;
        if (/[0-9]/.test(password)) strength += 20;
        if (/[@$!%*?&#]/.test(password)) strength += 20;
        return Math.min(strength, 100);
    }

    function getStrengthColor(strength: number): string {
        if (strength < 40) return "#f00"; // Weak
        if (strength < 80) return "#ff9800"; // Medium
        return "#4caf50"; // Strong
    }
}