document.getElementById('profileForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');
    if (!token) {
        alert('Please log in first');
        window.location.href = '/';
        return;
    }

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phone = document.getElementById('phone').value;

    const response = await fetch('http://localhost:5000/api/profile/update', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ firstName, lastName, phone })
    });

    if (response.ok) {
        alert('Profile updated successfully');
        window.location.href = '/';
    } else {
        const data = await response.json();
        alert(data.msg);
    }
});
