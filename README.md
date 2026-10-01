# सहेली AI (Saheli AI) — First-Time Rural Women Voice AI Scheme Navigator

> **Google for Developers & Hack2Skill AI Hackathon Submission**  
> **Event:** PromptWars × HACKARENA (Build with AI)  
> **Challenge:** *The Invisible Woman*  
> **Live Local Dev Server:** `http://localhost:5173`

---

## 🌟 Executive Summary

In India, **48% of rural women have never used the internet**, and millions remain locked out of essential welfare benefits not by capability, but by text-heavy, English-centric digital design. 

**Saheli AI (सहेली AI)** breaks down digital isolation. It is a voice-first, visual-first AI scheme navigator built for first-time rural women users with **zero digital literacy, zero English knowledge, and no technical assistance**.

Powered by **Google Gemini 1.5/2.0 Flash** and native **Web Speech Synthesis & Recognition**, Saheli AI allows rural women to speak in their own language (Hindi, Bengali, Marathi, Tamil, Telugu, English) to instantly discover maternity benefits, self-employment grants, and girl child savings.

---

## 🎯 Hackathon Challenge Alignment: *The Invisible Woman*

| Judging Criteria | Implementation in Saheli AI |
| :--- | :--- |
| **Zero Prior Knowledge** | High-contrast visual icon cards, giant touch targets, and automatic spoken audio narration at every step. |
| **No English Required** | Speaks and listens fluently in 6 Indian regional languages. |
| **Gemini AI Powered** | Custom Gemini System Instruction translates bureaucratic jargon into simple 2-bullet spoken guides. |
| **4-Hour Scope to Scale** | Features key schemes (PM Matru Vandana Yojana, Lakhpati Didi, Sukanya Samriddhi) with expandable schema architecture. |
| **Offline & Print Ready** | Generates a printable/downloadable **Scheme Access Pass (पात्रता पर्ची)** for presentation at local Anganwadi/Panchayat centres. |

---

## 🌍 UN Sustainable Development Goals (SDG) Alignment

- **SDG 5 (Gender Equality - 5.1, 5.b):** Empowering rural women through accessible voice AI technology and financial autonomy.
- **SDG 4 (Quality Education & Skills - 4.3, 4.4):** Providing accessible skill loans (Lakhpati Didi) and maternal healthcare knowledge.
- **SDG 10 (Reduced Inequalities - 10.2):** Ensuring marginalized women claim government entitlements independently.

---

## ⚡ Core Features & User Journey

1. **Voice Query Microphone (Tap & Speak):**
   - Click the giant pulsating microphone button and speak naturally (e.g., *"गर्भवती महिला के लिए ₹5000 वाली योजना बताइए"*).
2. **Gemini AI Simplification Engine:**
   - Gemini AI processes native speech, removes tech jargon (like *URL, OTP, Portal*), and responds with simple everyday terms (*कागज, बैंक पासबुक, आंगनवाड़ी दीदी*).
3. **Interactive Audio Eligibility Check:**
   - Guided 3-step wizard with giant **YES (हाँ)** and **NO (नहीं)** buttons. Every question is spoken out loud automatically.
4. **Scheme Access Card (पात्रता पर्ची):**
   - Confetti celebration on qualification! Generates a QR-coded summary slip with document checklist ready for print or WhatsApp sharing.

---

## 🧠 Gemini AI Prompt & Architecture Strategy

### System Instruction Strategy:
```text
You are 'Saheli AI' (सहेली AI), an empathetic voice assistant for rural Indian women with zero digital literacy.
Rules:
1. Always respond in simple, colloquial regional language (Hindi/Bengali/Tamil/etc.).
2. Keep answers short (2-3 sentences max) for clear Web Speech API audio output.
3. Never use tech jargon like 'Portal', 'OTP', or 'URL'. Use everyday terms like 'कागज', 'डाकघर', 'आंगनवाड़ी'.
4. Focus on cash amounts, required 2-3 documents, and exact location to visit.
```

---

## 🚀 Quick Setup & Local Execution (2 Minutes)

### Prerequisites:
- Node.js v18+ installed

### Step 1: Clone & Install Dependencies
```bash
git clone <your-github-repo-url>
cd pen
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in Google Chrome or Microsoft Edge for optimal voice speech support.

### Step 3: Build for Production
```bash
npm run build
```

---

## 🌐 Step-by-Step GitHub & Public Hosting Deployment Guide

### Option A: Deploy to Vercel (Recommended - 1 Minute)
1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: Initial Saheli AI commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/saheli-ai.git
   git push -u origin main
   ```
2. Go to [Vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your `saheli-ai` repository.
4. Set Build Command: `npm run build` and Output Directory: `dist`.
5. Click **Deploy**! Your site is now live with an `https://...vercel.app` URL.

### Option B: Deploy to Netlify
1. Drag and drop the `dist/` folder directly into [Netlify Drop](https://app.netlify.com/drop).
2. Instant public URL generated!

---

## 🛠️ Technology Stack

- **Frontend Framework:** React 19 + Vite 6
- **Styling:** Tailwind CSS v4 + Custom Ripple & Voice Animations
- **Icons:** Lucide React
- **Generative AI:** Google Gemini AI API (`@google/generative-ai`)
- **Voice Capabilities:** Web Speech Synthesis API & Web Speech Recognition API
- **Celebrations:** Canvas Confetti

---

## 🏆 Presentation Highlights for Hack2Skill AI Judges

- **Empathetic UI/UX:** Built specifically for low-literacy women with zero digital overhead.
- **Robust Demo Mode:** Features built-in smart offline Gemini responses so your live presentation never fails, even without internet/API keys.
- **Judge Control Panel:** Click **"Hack2Skill Overview"** in the top navigation bar during presentation to view the live SDG deck and challenge metrics.

---

*Designed with ❤️ for Google for Developers PromptWars × HACKARENA*
