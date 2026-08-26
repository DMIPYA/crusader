'use client';

import { useState } from 'react';
import styles from './contact.module.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const handleSubmit = (event: React.FormEvent) => { event.preventDefault(); alert('Thank you for your message. We will get back to you soon.'); };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setFormData({ ...formData, [event.target.name]: event.target.value });
  return <div className={styles.contactPage}><div className={styles.contactInner}><div className={styles.contactGrid}>
    <div><h1 className={styles.contactTitle}>Get in Touch</h1><p className={styles.contactLead}>Questions about sizing, materials, orders, or anything else? We&apos;re here to help.</p><div className={styles.contactDetails}>
      <div className={styles.contactDetail}><h2 className={styles.detailTitle}>Email</h2><a href="mailto:info@crusader.ru" className={styles.detailValue}>info@crusader.ru</a></div>
      <div className={styles.contactDetail}><h2 className={styles.detailTitle}>Phone</h2><a href="tel:+74951234567" className={styles.detailValue}>+7 (495) 123-45-67</a></div>
      <div className={styles.contactDetail}><h2 className={styles.detailTitle}>Location</h2><p className={styles.detailValue}>Moscow, Russia<br />By appointment only</p></div>
      <div className={styles.contactDetail}><h2 className={styles.detailTitle}>Hours</h2><p className={styles.detailValue}>Monday – Friday<br />10:00 – 19:00 MSK</p></div>
    </div></div>
    <form onSubmit={handleSubmit} className={styles.contactForm}>
      <Field label="Name"><input type="text" name="name" value={formData.name} onChange={handleChange} required className={styles.formInput} /></Field>
      <Field label="Email"><input type="email" name="email" value={formData.email} onChange={handleChange} required className={styles.formInput} /></Field>
      <Field label="Subject"><select name="subject" value={formData.subject} onChange={handleChange} required className={styles.formInput}><option value="">Select a subject</option><option value="order">Order Inquiry</option><option value="sizing">Sizing Question</option><option value="materials">Materials &amp; Care</option><option value="wholesale">Wholesale</option><option value="other">Other</option></select></Field>
      <Field label="Message"><textarea name="message" value={formData.message} onChange={handleChange} required rows={6} className={styles.formInput} /></Field>
      <button type="submit" className={styles.formSubmit}>Send Message</button>
    </form>
  </div></div></div>;
}

function Field({ label, children }: { label: string; children: React.ReactNode }) { return <div className={styles.formGroup}><label className={styles.formLabel}>{label}</label>{children}</div>; }
