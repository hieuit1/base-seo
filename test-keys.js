require('dotenv').config();

async function testKeys() {
    console.log("==========================================");
    console.log("KIỂM TRA KẾT NỐI API KEYS");
    console.log("==========================================\n");

    const { GEMINI_API_KEY, PAGESPEED_API_KEY, SERPAPI_API_KEY } = process.env;

    // 1. Test Gemini
    if (!GEMINI_API_KEY) {
        console.log("❌ Gemini: Bỏ qua vì không tìm thấy GEMINI_API_KEY trong file .env");
    } else {
        process.stdout.write("⏳ Đang kiểm tra Gemini API Key... ");
        try {
            const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${GEMINI_API_KEY}`);
            if (res.ok) {
                console.log("✅ Thành công! Key hoạt động tốt.");
            } else {
                const error = await res.json();
                console.log(`❌ Lỗi (${res.status}): ${error.error?.message || 'Không rõ lỗi'}`);
                if (res.status === 400) console.log("   👉 Gợi ý: Key bị sai hoặc không hợp lệ.");
                if (res.status === 403) console.log("   👉 Gợi ý: Key chưa có quyền truy cập hoặc API bị vô hiệu hóa.");
            }
        } catch (e) {
            console.log("❌ Lỗi mạng khi gọi Gemini:", e.message);
        }
    }

    console.log("------------------------------------------");

    // 2. Test PageSpeed
    if (!PAGESPEED_API_KEY) {
        console.log("❌ PageSpeed: Bỏ qua vì không tìm thấy PAGESPEED_API_KEY trong file .env");
    } else {
        process.stdout.write("⏳ Đang kiểm tra PageSpeed API Key... ");
        try {
            const res = await fetch(`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://example.com&key=${PAGESPEED_API_KEY}`);
            if (res.ok) {
                console.log("✅ Thành công! Key hoạt động tốt.");
            } else {
                const error = await res.json();
                console.log(`❌ Lỗi (${res.status}): ${error.error?.message || 'Không rõ lỗi'}`);
                if (res.status === 400) console.log("   👉 Gợi ý: Key bị sai hoặc định dạng không hợp lệ.");
                if (res.status === 403) console.log("   👉 Gợi ý: Key chưa được bật PageSpeed Insights API trong Google Cloud Console.");
            }
        } catch (e) {
            console.log("❌ Lỗi mạng khi gọi PageSpeed:", e.message);
        }
    }

    console.log("------------------------------------------");

    // 3. Test SerpApi
    if (!SERPAPI_API_KEY) {
        console.log("❌ SerpApi: Bỏ qua vì không tìm thấy SERPAPI_API_KEY trong file .env");
    } else {
        process.stdout.write("⏳ Đang kiểm tra SerpApi API Key... ");
        try {
            const res = await fetch(`https://serpapi.com/search?q=test&api_key=${SERPAPI_API_KEY}`);
            if (res.ok) {
                console.log("✅ Thành công! Key hoạt động tốt.");
            } else {
                const error = await res.json();
                console.log(`❌ Lỗi (${res.status}): ${error.error || 'Không rõ lỗi'}`);
                if (res.status === 401) console.log("   👉 Gợi ý: Key bị sai hoặc không tồn tại.");
            }
        } catch (e) {
            console.log("❌ Lỗi mạng khi gọi SerpApi:", e.message);
        }
    }

    console.log("==========================================");
}

testKeys();
