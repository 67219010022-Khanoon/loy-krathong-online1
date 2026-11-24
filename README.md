# เว็บไซต์ลอยกระทงออนไลน์

เว็บไซต์ตัวอย่างสำหรับเลือกแบบกระทง กรอกชื่อ และคำอธิษฐาน จากนั้นกระทงจะลอยแสดงบนสายน้ำ

## 1. ทดสอบบนเครื่องด้วย Node.js

1. ติดตั้ง Node.js หากยังไม่มี: https://nodejs.org/
2. แตกไฟล์ ZIP
3. เปิดโฟลเดอร์ `loy-krathong-online` ใน VS Code
4. เปิด Terminal แล้วพิมพ์:

   ```bash
   npm start
   ```

5. เปิดเว็บเบราว์เซอร์ไปที่ `http://localhost:3000`

> โปรเจกต์นี้เป็น Static Website จึงไม่ต้องติดตั้งแพ็กเกจเพิ่ม Node.js ใช้เปิดเว็บทดสอบในเครื่องเท่านั้น

## 2. อัปโหลดขึ้น GitHub

1. เข้าสู่ระบบ https://github.com/
2. กดปุ่ม **New repository**
3. ตั้งชื่อ Repository เช่น `loy-krathong-online`
4. เลือก **Public** แล้วกด **Create repository**
5. ในหน้า Repository กด **Add file > Upload files**
6. เปิดโฟลเดอร์โปรเจกต์ แล้วลากไฟล์และโฟลเดอร์ทั้งหมดด้านในไปวาง (ต้องเห็น `index.html` อยู่ระดับแรกของ Repository ไม่ใช่อยู่ในโฟลเดอร์ซ้อน)
7. กด **Commit changes**

## 3. เปิดใช้งาน GitHub Pages

1. เข้า Repository ที่เพิ่งอัปโหลด
2. กด **Settings**
3. เลือก **Pages** ที่เมนูด้านซ้าย
4. ในหัวข้อ **Build and deployment** เลือก Source เป็น **Deploy from a branch**
5. เลือก Branch เป็น `main` และ Folder เป็น `/ (root)`
6. กด **Save**
7. รอสักครู่แล้วรีเฟรชหน้า Pages จนมีข้อความว่าเว็บไซต์เผยแพร่แล้ว

ลิงก์เว็บไซต์จะมีรูปแบบ:

`https://ชื่อผู้ใช้.github.io/ชื่อ-repository/`

ตัวอย่าง ถ้าชื่อผู้ใช้ GitHub คือ `student123` และ Repository คือ `loy-krathong-online`:

`https://student123.github.io/loy-krathong-online/`

## 4. สิ่งที่ต้องส่ง

- ลิงก์เว็บไซต์: `https://ชื่อผู้ใช้.github.io/ชื่อ-repository/`
- ลิงก์ Repository: `https://github.com/ชื่อผู้ใช้/ชื่อ-repository`

## หมายเหตุ

- แก้ไขไฟล์แล้วต้องอัปโหลด/Commit changes ขึ้น GitHub อีกครั้ง GitHub Pages จึงจะอัปเดต
- GitHub Pages รองรับไฟล์หน้าเว็บแบบ Static เช่น HTML, CSS และ JavaScript แต่ไม่รัน Node.js server บน Pages
