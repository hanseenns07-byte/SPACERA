# 📸 Portfolio Photos — Cara Input Foto (Tutorial)

Setiap project punya **folder sendiri** di dalam `public/portfolio/`.
Sekarang semua foto masih berupa **placeholder** (gambar krem bertuliskan nama
file-nya). Kamu tinggal **menimpa (replace)** file-nya dengan foto asli —
**pakai nama file yang sama persis** — dan otomatis muncul di website. Tidak
perlu mengubah kode sama sekali.

> **Aturan emas:** nama file & lokasi folder harus sama. Contoh: taruh foto
> cover project Workspace di `public/portfolio/workspace-japandi/cover.jpg`.
> Format **.jpg** (boleh juga .png/.webp, tapi kalau .jpg paling gampang karena
> nama sudah cocok). Setiap gambar placeholder menampilkan nama file &
> ukuran yang disarankan, jadi tinggal ikuti tulisannya.

---

## Folder tiap project

| Project di website              | Folder                              |
| ------------------------------- | ----------------------------------- |
| Workspace Japandi               | `workspace-japandi/`                |
| Kamar — Kosambi Baru            | `kamar-kosambi-baru/`               |
| Kamar Fungsional                | `kamar-fungsional/`                 |
| Ruang Tamu — Greenlake City     | `ruang-tamu-greenlake/`             |
| Rumah 3.3 × 12m — Park Serpong  | `rumah-park-serpong/`               |

---

## Arti tiap nama file

| Nama file            | Dipakai untuk                                   | Ukuran disarankan          |
| -------------------- | ----------------------------------------------- | -------------------------- |
| `cover.jpg`          | Foto kartu di halaman Portfolio (thumbnail)     | 1000×1250 px (potrait 4:5) |
| `hero.jpg`           | Foto besar paling atas di halaman detail project| 2000×1120 px (landscape)   |
| `gallery-1.jpg` dst. | Galeri foto (slider) di halaman detail          | 1600×1000 px (landscape)   |
| `before.jpg`         | Foto **sebelum** (slider Before/After)          | 1600×1200 px               |
| `after.jpg`          | Foto **sesudah** (slider Before/After)          | 1600×1200 px               |
| `moodboard-1.jpg` dst| Moodboard / referensi konsep                    | 900×1200 px (potrait)      |
| `render-1.jpg` dst.  | Hasil render 3D                                  | 1600×1100 px (landscape)   |

Ukuran tidak wajib pas — website otomatis menyesuaikan. Yang penting rasionya
mirip biar tidak gepeng.

---

## File yang dibutuhkan tiap project

**1. `workspace-japandi/`**
`cover` · `hero` · `moodboard-1..3` · `gallery-1..3` · `render-1..2` · `before` · `after`

**2. `kamar-kosambi-baru/`**
`cover` · `hero` · `gallery-1..3` · `before` · `after`

**3. `kamar-fungsional/`**
`cover` · `hero` · `gallery-1..3` · `render-1..2`

**4. `ruang-tamu-greenlake/`**
`cover` · `hero` · `gallery-1..3` · `before` · `after`

**5. `rumah-park-serpong/`**
`cover` · `hero` · `gallery-1..4` · `render-1..2`

---

## Mau tambah / kurangi foto galeri?

Buka `src/data/projects.js`, cari project-nya, lalu edit bagian `gallery`:

```js
gallery: [
  { src: asset("workspace-japandi", "gallery-1.jpg"), alt: "Deskripsi foto" },
  { src: asset("workspace-japandi", "gallery-2.jpg"), alt: "Deskripsi foto" },
  // tambah baris baru untuk foto tambahan, lalu taruh gallery-4.jpg di folder
],
```

- **Tambah foto:** tambahkan satu baris & taruh file-nya di folder yang sama.
- **Hapus section:** kosongkan array-nya (`moodboard: []`, `renders: []`, atau
  `beforeAfter: null`) — section-nya otomatis hilang dari halaman.

## Mau ubah teks (judul, lokasi, luas, deskripsi)?

Semua teks ada di `src/data/projects.js` — tinggal ganti tulisannya. Field
`area: "—"` di project Kamar Kosambi Baru bisa kamu isi luas ruangannya.

---

Setelah menaruh foto, jalankan `npm run build` (atau tunggu Netlify build
otomatis kalau sudah connect) dan foto langsung tampil. Selesai! ✨
