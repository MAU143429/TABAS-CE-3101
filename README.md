# 🧳 TABAS — Tec Airlines Baggage Administration System

## 🧠 Overview

This repository contains the full implementation of TABAS (Tec Airlines Baggage Administration System), a complete baggage handling and logistics platform developed for the course CE3101 — Bases de Datos at Instituto Tecnológico de Costa Rica.

TABAS addresses the operational challenges of a growing low-cost airline by providing tools to manage users, baggage, staff, and airport logistics. It includes both administrative and mobile interfaces.

---

## ✈️ Key Features

### Web Application (Administration)

- Worker and user registration
- Baggage creation and cost calculation
- BagCart (baggage cart) management
- Flight assignment and BagCart tracking
- Digital invoice generation in **XML** and **PDF** (conforming to Costa Rican tax authority standards)
- Secure baggage sealing process with unique alphanumeric code
- Multiple PDF reports:
  - Baggage by client
  - Baggage reconciliation across flights and storage sections

### Mobile Application (Airline Staff)

- Secure login system
- Scanning and assigning baggage to BagCarts
- Baggage rejection process with reason logging
- Baggage-to-airplane assignment via QR/barcode scanning

---

## 💻 Technologies

- **Frontend**: Angular, Bootstrap, HTML5, CSS3
- **Backend**: C#/.NET Web API
- **Data Storage**: XML / JSON (no relational DB used)
- **Reporting**: XML generation and PDF export
- **Deployment**: IIS on Windows
- **Mobile**: Integrated scanning and status tracking

---
