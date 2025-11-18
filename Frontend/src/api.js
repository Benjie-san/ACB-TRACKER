const API_URL = "http://ec2-47-129-122-241.ap-southeast-1.compute.amazonaws.com/api";

export async function testConnection() {
    const res = await fetch(`${API_URL}/test.php`);
    return await res.text();
}

export async function login(username, password) {
    try {
        const res = await fetch(`${API_URL}/login.php`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        return res.json();
    } catch (err) {
        return { success: false, message: "Network error" };
    }
}

