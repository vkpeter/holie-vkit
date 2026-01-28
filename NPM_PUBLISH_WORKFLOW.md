# holie-vkit v1.4.0 - npm Publish & Update Workflow

**Created:** January 28, 2026  
**Status:** Ready to Execute (Awaiting npm auth)  
**Estimated Time:** 15 minutes total

---

## Pre-Flight Checklist

Before running any commands, verify these items:

### ✅ holie-vkit Repository State

```bash
cd c:\Users\pvk\Documents\GitHub\holie-vkit

# Verify version is 1.4.0
cat package.json | grep version
# Expected: "version": "1.4.0"

# Verify build succeeds
npm run build
# Expected: tsc succeeds (0 errors)

# Verify all locale files exist
ls src/i18n/locales/
# Expected: 10 files (nl, en, de, fr, es, pt, ar, pl, ja, tr)

# Verify no uncommitted changes
git status
# Expected: "working tree clean"

# Verify npm auth works
npm whoami
# Expected: Your npm username
# IF THIS FAILS: npm logout && npm login
```

### ✅ Project Dependencies

All projects have holie-vkit as dependency:
- holie: `package.json` ✅
- scherp-mes-nu: `package.json` ✅
- eendje: `package.json` ✅
- hapklik: `package.json` ✅

---

## Step-by-Step Execution

### STEP 1: Verify npm Authentication (2 min)

```bash
# Test npm login status
npm whoami

# If you see "ERR! code E401" or "not logged in":
npm logout
npm login

# Enter your npm credentials:
# - Username: [your npm username]
# - Password: [your npm password]
# - One-time password: [if 2FA enabled]

# Verify it worked:
npm whoami
# Should print your username, NOT error
```

**Troubleshooting:**
- If 2FA enabled: Use temporary auth token from npm account settings
- If "invalid credentials": Check npm.com account
- If timeout: Check internet connection

---

### STEP 2: Publish holie-vkit v1.4.0 (3 min)

```bash
cd c:\Users\pvk\Documents\GitHub\holie-vkit

# Verify version one more time
npm pkg get version
# Should output: 1.4.0

# Publish to npm registry
npm publish

# Expected output:
# npm notice
# npm notice 📦  holie-vkit@1.4.0
# npm notice === Tarball Contents ===
# npm notice 112 files included
# ...
# npm notice === Tarball Details ===
# npm notice name:          holie-vkit
# npm notice version:       1.4.0
# npm notice package size:  20.1 kB
# npm notice unpacked size: 68.4 kB
# npm notice shasum:        [checksum]
# npm notice integrity:     [integrity hash]
# npm notice total files:   112
# npm notice
# + holie-vkit@1.4.0

# Verify it's published
npm view holie-vkit@1.4.0
# Should show package info with latest version 1.4.0
```

**What npm publish does:**
- ✅ Creates tarball of entire package (112 files, 20.1 kB)
- ✅ Uploads to npm registry
- ✅ Makes available for `npm install`
- ✅ Available immediately worldwide

**If publish fails:**

```bash
# Error: "npm error code E403" (Forbidden)
# → Check you have publish permissions for holie-vkit
# → Contact package owner if needed

# Error: "npm error code E409" (Conflict)
# → Version already published, increment version:
npm version patch  # 1.4.0 → 1.4.1
npm publish

# Error: "npm error code E401" (Unauthorized)
# → Run: npm logout && npm login
# → Then: npm publish again
```

---

### STEP 3: Update All 4 Projects (5 min)

Once v1.4.0 is published, update each project:

#### 3a. Update holie

```bash
cd c:\Users\pvk\Documents\GitHub\holie

# Update to latest version
npm install holie-vkit@latest

# Verify new version
npm list holie-vkit
# Expected: holie-vkit@1.4.0

# Rebuild
npm run build

# Expected output:
# > holie@2.1.0 build
# > vite build
# ✓ built in 6.24s

# Test build succeeded (no errors)
npm run dev
# App should load in browser with all languages working
```

#### 3b. Update scherp-mes-nu

```bash
cd c:\Users\pvk\Documents\GitHub\scherp-mes-nu

npm install holie-vkit@latest
npm run build

# Verify:
npm list holie-vkit
# Expected: holie-vkit@1.4.0
```

#### 3c. Update eendje

```bash
cd c:\Users\pvk\Documents\GitHub\eendje

# Note: Use --force because of peer dependency conflicts
npm install holie-vkit@latest --force

npm run build

# Verify:
npm list holie-vkit
# Expected: holie-vkit@1.4.0
```

#### 3d. Update hapklik

```bash
cd c:\Users\pvk\Documents\GitHub\hapklik

npm install holie-vkit@latest

npm run build

# Verify:
npm list holie-vkit
# Expected: holie-vkit@1.4.0
```

---

### STEP 4: Final Validation (5 min)

#### Verify all builds succeed

```bash
# holie
cd c:\Users\pvk\Documents\GitHub\holie && npm run build
# Expected: ✓ built in 6.24s

# scherp-mes-nu
cd c:\Users\pvk\Documents\GitHub\scherp-mes-nu && npm run build
# Expected: ✓ built in 6.27s

# eendje
cd c:\Users\pvk\Documents\GitHub\eendje && npm run build
# Expected: ✓ built in 9.30s

# hapklik
cd c:\Users\pvk\Documents\GitHub\hapklik && npm run build
# Expected: ✓ built in 12.71s
```

#### Run audit to confirm no vulnerabilities

```bash
cd c:\Users\pvk\Documents\GitHub\holie && npm audit
# Expected: 0 vulnerabilities

cd c:\Users\pvk\Documents\GitHub\scherp-mes-nu && npm audit
# Expected: 0 vulnerabilities

cd c:\Users\pvk\Documents\GitHub\eendje && npm audit
# Expected: 0 vulnerabilities

cd c:\Users\pvk\Documents\GitHub\hapklik && npm audit
# Expected: 0 vulnerabilities
```

#### Verify i18n works in each project

```bash
# holie
cd c:\Users\pvk\Documents\GitHub\holie && npm run dev
# Browser: Check language switcher works, all 4 languages appear

# scherp-mes-nu
cd c:\Users\pvk\Documents\GitHub\scherp-mes-nu && npm run dev
# Browser: Check language switcher works, content translates

# eendje
cd c:\Users\pvk\Documents\GitHub\eendje && npm run dev
# Browser: Check language switcher works, admin UI + articles translate

# hapklik
cd c:\Users\pvk\Documents\GitHub\hapklik && npm run dev
# Browser: Check language switcher works, all content translates
```

---

## Batch Commands (Optional - All at Once)

If you prefer to run everything together:

```bash
# Step 1: Publish holie-vkit
cd c:\Users\pvk\Documents\GitHub\holie-vkit && npm publish

# Step 2: Update all projects and build
cd c:\Users\pvk\Documents\GitHub\holie && npm install holie-vkit@latest && npm run build
cd c:\Users\pvk\Documents\GitHub\scherp-mes-nu && npm install holie-vkit@latest && npm run build
cd c:\Users\pvk\Documents\GitHub\eendje && npm install holie-vkit@latest --force && npm run build
cd c:\Users\pvk\Documents\GitHub\hapklik && npm install holie-vkit@latest && npm run build

# Step 3: Verify all built successfully (should see 4x "✓ built")

# Step 4: Run audits
cd c:\Users\pvk\Documents\GitHub\holie && npm audit
cd c:\Users\pvk\Documents\GitHub\scherp-mes-nu && npm audit
cd c:\Users\pvk\Documents\GitHub\eendje && npm audit
cd c:\Users\pvk\Documents\GitHub\hapklik && npm audit
# All should show: "0 vulnerabilities"
```

---

## Rollback Plan (If Something Breaks)

### If npm publish fails

```bash
# No rollback needed - package not published
# Fix the issue and try again:
npm publish
```

### If project build fails after update

```bash
# Revert to previous version
cd [project]
npm install holie-vkit@1.3.0
npm run build

# Debug the issue, then update again
npm install holie-vkit@1.4.0
npm run build
```

### If you need to unpublish from npm

```bash
# ONLY use if critical bug found in 1.4.0
npm unpublish holie-vkit@1.4.0

# Fix the bug locally
# Increment version to 1.4.1
npm version patch

# Re-publish
npm publish
```

---

## Success Criteria

✅ **Publish Succeeded When:**
- `npm publish` completes without errors
- `npm view holie-vkit@1.4.0` shows the new version
- Package visible on npmjs.com

✅ **Projects Updated When:**
- `npm list holie-vkit` shows 1.4.0 in each project
- `npm run build` succeeds in all 4 projects
- `npm audit` shows 0 vulnerabilities everywhere

✅ **i18n Working When:**
- `npm run dev` starts without errors
- Language switcher appears in all apps
- Switching languages updates all text
- New languages (es, pt, ar, pl, ja, tr) available in projects that need them

---

## What Changed in v1.4.0

### holie-vkit Package

**New Files:**
- 6 new language locale files (es, pt, ar, pl, ja, tr)
- PROJECT_I18N_TEMPLATE.ts (migration guide)

**Modified Files:**
- src/i18n/config.ts (supports all 10 languages)
- package.json (version 1.3.0 → 1.4.0)

**Feature Additions:**
- 10 languages now available (was 4)
- activeLanguages parameter for I18nProvider
- Better error handling in initialization

### Dependent Projects

**No code changes required!**
- All projects continue to work with v1.4.0
- Optional: Add new languages if desired
- Existing language setup remains 100% compatible

---

## Quick Reference

| Project | Version Now | Update To | Time to Update |
|---------|-------------|-----------|-----------------|
| holie-vkit | 1.4.0 | 1.4.0 (publish) | 3 min |
| holie | 1.3.0 | 1.4.0 | 2 min |
| scherp-mes-nu | 1.3.0 | 1.4.0 | 2 min |
| eendje | 1.3.0 | 1.4.0 | 2 min (+force) |
| hapklik | 1.3.0 | 1.4.0 | 2 min |
| **TOTAL** | - | - | **~15 min** |

---

## Documentation Created

Three documents prepared for this update:

1. **I18N_AUDIT_REPORT.md** - Complete audit of all i18n issues
   - 26 issues identified (2 critical, 8 high, 7 medium, 4 low)
   - Recommendations for each issue
   - Priority fixes listed

2. **I18N_IMPLEMENTATION_GUIDE.md** - Full implementation documentation
   - Quick start guide
   - Architecture overview
   - Setup instructions for all patterns
   - Troubleshooting guide
   - Migration guide

3. **NPM_PUBLISH_WORKFLOW.md** (this file) - Step-by-step execution guide
   - Pre-flight checklist
   - Command sequences
   - Verification steps
   - Rollback procedures

---

## Status: READY FOR EXECUTION

✅ holie-vkit v1.4.0 built successfully  
✅ All 10 locale files created  
✅ All 4 projects ready for update  
✅ 0 vulnerabilities across all projects  
✅ Documentation complete  

**⏳ BLOCKED ON:** npm authentication (user must run `npm login`)

**NEXT STEP:** When npm auth is restored, run Step 1 then follow remaining steps.

---

**Created:** January 28, 2026  
**Ready to Execute:** YES  
**Estimated Duration:** 15 minutes  
**Expected Result:** All 4 projects running v1.4.0 with 0 errors, 0 vulnerabilities
