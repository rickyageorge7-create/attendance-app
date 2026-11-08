# Attendance App (test version)

QR scan -> student ID -> face scan -> marked present. Backend: Supabase.

## Run it
1. Open this folder in VS Code (File -> Open Folder -> attendance-app).
2. Install the "Live Server" extension.
3. Right-click `enroll.html` -> Open with Live Server -> enroll a student (ID, name, face).
4. Open `admin.html` -> enter a class name -> Start session -> QR code appears.
5. Scan the QR with a phone (the site must be on HTTPS for phone cameras, e.g. GitHub Pages).

## Files
- `enroll.html` register a student + face
- `index.html` student check-in (what the QR opens)
- `admin.html` start a session, show QR, live attendance list
- `js/config.js` Supabase connection
- `js/face.js` face detection / matching helpers

## Known test-only shortcuts (fix before the real version)
- Database policies are fully open. Add real access rules.
- QR code does not rotate. Add an expiring token.
- No liveness check. A photo of a face could pass.
- Face match threshold is 0.5. Tune it with real tests.
