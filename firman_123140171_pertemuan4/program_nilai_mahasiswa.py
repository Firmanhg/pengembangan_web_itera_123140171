from prettytable import PrettyTable
mahasiswa_list = [
    {"nama": "Andi", "nim": "2023001", "nilai_uts": 80, "nilai_uas": 85, "nilai_tugas": 90},
    {"nama": "Budi", "nim": "2023002", "nilai_uts": 70, "nilai_uas": 75, "nilai_tugas": 65},
    {"nama": "Citra", "nim": "2023003", "nilai_uts": 90, "nilai_uas": 88, "nilai_tugas": 92},
    {"nama": "Dewi", "nim": "2023004", "nilai_uts": 60, "nilai_uas": 70, "nilai_tugas": 55},
    {"nama": "Eko", "nim": "2023005", "nilai_uts": 50, "nilai_uas": 45, "nilai_tugas": 40}
]

def hitung_nilai_akhir(m):
    """Menghitung nilai akhir sesuai bobot"""
    return (0.3 * m["nilai_uts"]) + (0.4 * m["nilai_uas"]) + (0.3 * m["nilai_tugas"])

def tentukan_grade(nilai):
    """Menentukan grade berdasarkan nilai akhir"""
    if nilai >= 80:
        return "A"
    elif nilai >= 70:
        return "B"
    elif nilai >= 60:
        return "C"
    elif nilai >= 50:
        return "D"
    else:
        return "E"

def tampilkan_tabel():
    """Menampilkan data mahasiswa dalam bentuk tabel"""
    table = PrettyTable()
    table.field_names = ["Nama", "NIM", "UTS", "UAS", "Tugas", "Akhir", "Grade"]

    for m in mahasiswa_list:
        nilai_akhir = hitung_nilai_akhir(m)
        grade = tentukan_grade(nilai_akhir)
        table.add_row([m["nama"], m["nim"], m["nilai_uts"], m["nilai_uas"],
                       m["nilai_tugas"], f"{nilai_akhir:.2f}", grade])

    print(table)

def cari_tertinggi_terendah():
    """Menampilkan mahasiswa dengan nilai tertinggi & terendah"""
    sorted_data = sorted(mahasiswa_list, key=lambda m: hitung_nilai_akhir(m))
    terendah = sorted_data[0]
    tertinggi = sorted_data[-1]

    print("\nNilai Tertinggi :", tertinggi["nama"], "-", hitung_nilai_akhir(tertinggi))
    print("Nilai Terendah  :", terendah["nama"], "-", hitung_nilai_akhir(terendah))

def input_mahasiswa_baru():
    print("\n=== Input Mahasiswa Baru ===")
    nama = input("Nama: ")
    nim = input("NIM : ")
    uts = float(input("UTS: "))
    uas = float(input("UAS: "))
    tugas = float(input("Tugas: "))

    mahasiswa_list.append({
        "nama": nama,
        "nim": nim,
        "nilai_uts": uts,
        "nilai_uas": uas,
        "nilai_tugas": tugas
    })

    print("Berhasil ditambahkan!")

def filter_grade():
    target = input("Masukkan grade yang dicari (A/B/C/D/E): ").upper()
    table = PrettyTable()
    table.field_names = ["Nama", "NIM", "Akhir", "Grade"]

    for m in mahasiswa_list:
        nilai = hitung_nilai_akhir(m)
        grade = tentukan_grade(nilai)
        if grade == target:
            table.add_row([m["nama"], m["nim"], f"{nilai:.2f}", grade])

    print(table)

def rata_rata_kelas():
    total = sum(hitung_nilai_akhir(m) for m in mahasiswa_list)
    rata = total / len(mahasiswa_list)
    print(f"\nRata-rata kelas: {rata:.2f}")

def menu():
    while True:
        print("\n=== PROGRAM NILAI MAHASISWA ===")
        print("1. Tampilkan Data Mahasiswa")
        print("2. Input Mahasiswa Baru")
        print("3. Cari Tertinggi dan Terendah")
        print("4. Filter Berdasarkan Grade")
        print("5. Hitung Rata-rata Kelas")
        print("6. Keluar")

        pilih = input("Pilih menu (1-6): ")

        if pilih == "1":
            tampilkan_tabel()
        elif pilih == "2":
            input_mahasiswa_baru()
        elif pilih == "3":
            cari_tertinggi_terendah()
        elif pilih == "4":
            filter_grade()
        elif pilih == "5":
            rata_rata_kelas()
        elif pilih == "6":
            print("Keluar...")
            break
        else:
            print("Pilihan tidak valid!")

menu()
