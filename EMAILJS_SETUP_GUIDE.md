# EmailJS Setup Guide for Contact Form

This guide will help you configure EmailJS to send emails from your portfolio contact form to **amrkhaledwork9@gmail.com**.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Click **Sign Up** (it's free!)
3. Create an account using your email

## Step 2: Add an Email Service

1. Once logged in, go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose **Gmail** as your email service
4. Click **Connect Account** and authorize EmailJS to use your Gmail account (amrkhaledwork9@gmail.com)
5. Give your service a name (e.g., "Portfolio Gmail")
6. Click **Create Service**
7. **IMPORTANT:** Copy your **Service ID** - you'll need this later

## Step 3: Create an Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template configuration:

### Template Settings:
- **Template Name:** Portfolio Contact Form
- **Subject:** New Contact Form Submission from {{from_name}}
- **From Email:** Use your Gmail (amrkhaledwork9@gmail.com)
- **From Name:** Portfolio Contact Form
- **Reply To:** {{from_email}} (This allows you to reply directly to the sender!)

### Email Content (Body):

**Option 1: Simple Text Template**
```
You have received a new message from your portfolio contact form!

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This email was sent from your portfolio website contact form.
Reply to this email to respond to {{from_name}}.
```

**Option 2: Professional HTML Template (Recommended)**

Switch to **HTML** mode in EmailJS and paste this:

```html
<div style="font-family: system-ui, sans-serif, Arial; font-size: 12px">
  <div>A message by {{from_name}} has been received. Kindly respond at your earliest convenience.</div>
  <div
    style="
      margin-top: 20px;
      padding: 15px 0;
      border-width: 1px 0;
      border-style: dashed;
      border-color: lightgrey;
    "
  >
    <table role="presentation">
      <tr>
        <td style="vertical-align: top">
          <div
            style="
              padding: 6px 10px;
              margin: 0 10px;
              background-color: aliceblue;
              border-radius: 5px;
              font-size: 26px;
            "
            role="img"
          >
            👤
          </div>
        </td>
        <td style="vertical-align: top">
          <div style="color: #2c3e50; font-size: 16px">
            <strong>{{from_name}}</strong>
          </div>
          <div style="color: #7f8c8d; font-size: 13px; margin-top: 4px">{{from_email}}</div>
          <p style="font-size: 14px; color: #34495e; margin-top: 12px; line-height: 1.6">
            {{message}}
          </p>
        </td>
      </tr>
    </table>
  </div>
  <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #ecf0f1; color: #95a5a6; font-size: 11px">
    <p style="margin: 0">This email was sent from your portfolio website contact form.</p>
    <p style="margin: 5px 0 0 0">Reply directly to this email to respond to {{from_name}}.</p>
  </div>
</div>
```

> **💡 Tip:** The HTML template is also saved in `email-template.html` for easy copy-paste!

### Template Variables:
Make sure these variables are included:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email address
- `{{message}}` - The message content
- `{{to_email}}` - Your email (amrkhaledwork9@gmail.com)

4. In the **To Email** field, enter: `{{to_email}}`
5. Click **Save**
6. **IMPORTANT:** Copy your **Template ID** - you'll need this later

## Step 4: Get Your Public Key

1. Go to **Account** → **General** in the dashboard
2. Find your **Public Key** (also called User ID)
3. **IMPORTANT:** Copy this key - you'll need it next

## Step 5: Update Your JavaScript File

Open `js/script.js` and replace the following placeholders:

1. **Line 137:** Replace `'YOUR_PUBLIC_KEY'` with your actual Public Key
   ```javascript
   emailjs.init('your_actual_public_key_here');
   ```

2. **Line 168:** Replace `'YOUR_SERVICE_ID'` with your Service ID
   ```javascript
   'YOUR_SERVICE_ID',    // Replace with your EmailJS service ID
   ```

3. **Line 169:** Replace `'YOUR_TEMPLATE_ID'` with your Template ID
   ```javascript
   'YOUR_TEMPLATE_ID',   // Replace with your EmailJS template ID
   ```

### Example (with fake IDs):
```javascript
// Initialize EmailJS
(function() {
  emailjs.init('AbCdEfGhIjKlMnOp123'); // Your actual public key
})();

// In the form submit handler:
const response = await emailjs.send(
  'service_abc1234',      // Your actual service ID
  'template_xyz5678',     // Your actual template ID
  {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
    to_email: 'amrkhaledwork9@gmail.com'
  }
);
```

## Step 6: Test Your Contact Form

1. Open your portfolio website in a browser
2. Navigate to the Contact section
3. Fill out the form with test data
4. Click **Send Message**
5. Check your Gmail inbox (amrkhaledwork9@gmail.com) for the email!

## Troubleshooting

### Email not received?
- Check your spam/junk folder
- Verify all three IDs are correctly entered in `script.js`
- Check the browser console (F12) for any error messages
- Make sure you're connected to the internet
- Verify your EmailJS account is active

### "Service not found" error?
- Double-check your Service ID matches exactly
- Make sure the service is active in your EmailJS dashboard

### "Template not found" error?
- Double-check your Template ID matches exactly
- Ensure the template is saved and published

### Rate limits?
- Free EmailJS accounts have a limit of 200 emails/month
- If you need more, consider upgrading your plan

## EmailJS Free Plan Limits

- ✅ 200 emails per month
- ✅ 2 email services
- ✅ 2 email templates
- ✅ No credit card required

This should be more than enough for a personal portfolio!

## Security Note

Your EmailJS Public Key is safe to expose in client-side code. EmailJS is designed to work this way. However, to prevent spam:

1. Enable **reCAPTCHA** in your EmailJS dashboard (optional but recommended)
2. Set up **email rate limiting** in EmailJS settings
3. Monitor your EmailJS dashboard for unusual activity

## Need Help?

- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: https://www.emailjs.com/support/

---

**Your target email:** amrkhaledwork9@gmail.com

Once configured, all contact form submissions will be sent directly to this email address!
