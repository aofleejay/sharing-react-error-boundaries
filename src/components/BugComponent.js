import React, { Component } from 'react'
import Layout from './Layout'

class BugComponent extends Component {
  render() {
    throw new Error('Cannot read property xxx of undefined.')
    return (
      <Layout>
        <h1>วิลเลจเวิร์คสันทนาการโบว์ลิ่ง</h1>
        <p>รันเวย์รายชื่อ ล็อตอุปนายิกาพฤหัส คอนโทรลโพลล์ทรู โปรโมเตอร์เทรลเลอร์ ดยุก ก่อนหน้าตัวตนซัมเมอร์ เซอร์เพาเวอร์โฟน ไตรมาส นิวส์ แอดมิสชัน ซิมมอบตัววอลซ์ฮัลโลวีน ชาร์ป มิวสิคพุทธภูมิซาดิสม์ฟีดสคริปต์ แคร็กเกอร์ภูมิทัศน์สไตล์ เช็งเม้งสเตชันแคร็กเกอร์รีสอร์ท</p>
      </Layout>
    )
  }
}

export default BugComponent
