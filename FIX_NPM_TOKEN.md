# ⚠️ npm Token Issue - Hoe Op Te Lossen

## Probleem

npm heeft alle "classic tokens" ingetrokken wegens security. Je krijgt:
```
npm error code E401
401 Unauthorized
```

## Oplossing (Stap voor Stap)

### 1. Ga naar npm account
https://www.npmjs.com/settings/[JOUW_USERNAME]/tokens

Of rechtstreeks: https://www.npmjs.com/settings/tokens

### 2. Maak een nieuw token aan
- Klik: **"Create New Token"** of **"Generate New Token"**
- Selecteer: **"Automation"** (granular token)
- Stel 90 dagen expiration in (vereist)
- Selecteer permissions:
  - ☑️ `read:packages`
  - ☑️ `publish:packages`
  - ☑️ `write:packages`
- Klik: **"Create**

### 3. Kopieer het token
⚠️ **Je ziet het maar 1x!** Kopieer direct naar clipboard.

### 4. Voer in terminal in

```bash
npm login
```

Vul in:
- **Username:** [Je npm username]
- **Password:** [Het token wat je net hebt gekopieerd]
- **Email:** [Je npm email]
- **One-Time Password (OTP):** Leave empty (press Enter)

### 5. Verifieer

```bash
npm whoami
```

Dit zou je username moeten printen.

---

## Waarom Dit Nodig Is

- 🔒 npm heeft legacy tokens ingetrokken (security)
- 🔐 Nieuwe tokens hebben maximaal 90 dagen expiration
- 📋 Granular tokens beperken permissions beter

---

## Eenmaal npm Login Werkt

Run deze commandos:

```bash
# In holie-vkit directory
cd c:\Users\pvk\Documents\GitHub\holie-vkit
npm publish

# Dan alle projects updaten
cd c:\Users\pvk\Documents\GitHub\holie
npm install holie-vkit@latest

# etc voor andere projects
```

---

**Referentie:** https://docs.npmjs.com/creating-and-viewing-access-tokens
