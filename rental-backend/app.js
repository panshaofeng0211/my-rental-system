const express = require('express');
const oracledb = require('oracledb');
const app = express();

app.use(express.json());

// Oracle 資料庫配置
const dbConfig = {
    user: 'admin', // 替換為您的 Oracle 資料庫用戶名
    password: 'your_password', // 替換為您的密碼
    connectString: '(DESCRIPTION=(ADDRESS=(PROTOCOL=TCPS)(HOST=adb.us-ashburn-1.oraclecloud.com)(PORT=1522))(CONNECT_DATA=(SERVICE_NAME=g1a6512ede152a0_a4kdjdnjaf3npbur_high.adb.oraclecloud.com))(SECURITY=(SSL_SERVER_DN_MATCH=YES)))'
};

// 測試連接端點
app.get('/test', async (req, res) => {
    try {
        const connection = await oracledb.getConnection(dbConfig);
        const result = await connection.execute('SELECT 1 FROM DUAL');
        res.json({ success: true, result: result.rows });
        await connection.close();
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// 範例：獲取所有車輛記錄
app.get('/vehicles', async (req, res) => {
    try {
        const connection = await oracledb.getConnection(dbConfig);
        const result = await connection.execute('SELECT * FROM VEHICLES');
        res.json(result.rows);
        await connection.close();
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// 啟動服務
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
