# SLM grant preparation demo

Public demo: https://12334bruno.github.io/slm-demo/

Try **Load sample documents** for the intake workflow, or **Open filled example** for a fictional application with 24 editable answers. **Download demo files** provides PDF, DOCX and TXT files you can upload yourself.

Document parsing, funding checks, budget calculations and official-template DOCX exports run on your device with Python in a WebAssembly worker. Workspaces and uploads are saved in this browser's IndexedDB storage. Visitors do not share data. The first visit downloads the runtime from jsDelivr and can take a minute. Clearing site storage removes your saved work.

All example companies and evidence are fictional. This is a grant preparation prototype; applications require human review. Historical demo rules use 15 June 2026. Live source refresh and optional OpenAI processing are available only in the local server app.

This repository contains the published static build and the Python services needed by the browser demo. It excludes local uploads, private background documents, credentials and evaluator-only fixtures.
