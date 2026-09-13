const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// ============================================
//  📦 ذخیره‌سازی موقت ریفرال‌ها (توی RAM)
//  ساختار: { "Wolf_4821": ["Wolf_7391", "Wolf_2814"] }
// ============================================
const referrals = {};

// ============================================
//  📝 ثبت زیرمجموعه جدید
// ============================================
app.post('/api/register', (req, res) => {
  const { userId, refCode } = req.body;

  if (!userId || !refCode) {
    return res.status(400).json({ success: false, message: 'userId and refCode required' });
  }

  if (userId === refCode) {
    return res.json({ success: false, message: 'You cannot refer yourself' });
  }

  if (!referrals[refCode]) {
    referrals[refCode] = [];
  }

  if (!referrals[refCode].includes(userId)) {
    referrals[refCode].push(userId);
    console.log('✅ ' + userId + ' → referred by ' + refCode);
    return res.json({ success: true, added: true, message: 'Saved' });
  } else {
    console.log('⚠️ ' + userId + ' already referred by ' + refCode);
    return res.json({ success: true, added: false, message: 'Already saved' });
  }
});

// ============================================
//  📊 گرفتن لیست زیرمجموعه‌های یه کاربر
// ============================================
app.get('/api/referrals/:refCode', (req, res) => {
  const refCode = req.params.refCode;
  const list = referrals[refCode] || [];
  res.json({
    success: true,
    refCode: refCode,
    count: list.length,
    referrals: list
  });
});

// ============================================
//  📈 آمار کلی
// ============================================
app.get('/api/stats', (req, res) => {
  let total = 0;
  for (const key in referrals) {
    total += referrals[key].length;
  }
  res.json({
    success: true,
    totalReferrals: total,
    totalReferrers: Object.keys(referrals).length
  });
});

// ============================================
//  🏠 چک کردن سرور
// ============================================
app.get('/', (req, res) => {
  res.json({
    status: 'online',
    service: 'Wolf Referral Webhook',
    bot: 'Wolf_airdrops_bot',
    version: '1.0.0'
  });
});

app.listen(PORT, () => {
  console.log('🚀 Wolf webhook running on port ' + PORT);
  console.log('🤖 Bot: @Wolf_airdrops_bot');
});
