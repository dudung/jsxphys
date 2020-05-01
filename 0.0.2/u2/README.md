# Ujian FI3201-01 Fisika Komputasi
Mata kuliah Fisika komputasi berkode FI3201 untuk kelas 01 akan melangsungkan U2 dengan memanfaatkan format Markdown dalam penyampaian jawabannya dan diarsipan di [jsxPhys versi 0.02](https://github.com/dudung/jsxphys/tree/master/0.0.2) ini.


# Persiapan dan pelaksanaan ujian kelompok

1. Pelajari Markdown markup language. Jawaban U2 akan dituliskan dalam format Markdown https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet

2. Pelajari C++ online compiler untuk membuat kode yang akan disubmit, misalnya C++ hhell http://cpp.sh/

3. Pelajari fomat LaTeX untuk menulis persamaan matematika https://davidhamann.de/2017/06/12/latex-cheat-sheet/

4. Latih format LaTeX tersebut dengan penyunting daring, misalnya http://tiny.cc/fi3201-01-u2

5. Pelajari prinsip kerja ANN pada https://playground.tensorflow.org/ dengan melakukan berbagai variasi parameter

6. Pelajari online chart seperti https://chart-studio.plotly.com/create/#/ sehingga dapat share hasilnya seperti https://plotly.com/~Sparisoma/3/#/ untuk jawaban U2.

7. Ujian dikumpulkan dalam sebuah berkas README.md yang dicantumkan pada halaman Github salah seorang wakil kelompok dan link disampaikan secara pribadi lewat WA.

8. Batas waktu pengumpulan hasil ujian adalah pukul 23.59 pada hari Jumat, 1 Mei 2020.


# Soal
Terdapat lima buah soal yang akan dikerjakan secara per kolompok dan pemberian soal diberikan berangsur-angsur.

## Soal 1
Gunakan [editor](https://rawcdn.githack.com/dudung/jsxphys/4220729be109df8b94729ca4605562caa6d7596b/0.0.2/editor.html) untuk melihat tampilan soal sebenarnya bila diperlukan.

	Terdapat sistem bandul yang terdiri dari titik pusat koordinat $O(0, 0)$,
	tali tak bermassa dengan panjang $l$, dan mata bandul berbentuk bola dengan
	diameter $D$ dan massa $m$. Sumbu $x$ berarah horizontal ke kanan dan sumbu
	$y$ berarah vertikal ke atas, dengan keduanya berada pada bidang gambar layar
	monitor. Percepatan gravitasi dalam sistem ini adalah

	\begin{equation}
	\label{eqn:acc-grav}
	\vec{g} = - g \hat{y},
	\end{equation}

	dengan $g$ adalah besar percepatan gravitasi bumi. Tali selalu tegang dengan
	tegangan tali $T$.
	<br /><br />

	a. Gunakan hukum-hukum Newton pada masing-masing arah sehingga dapat
	diperoleh persamaan diferensial non-linier pada arah $x$

	\begin{equation}
	\label{eqn:nlode-x}
	\ddot{x} + \left( \frac{3 \pi \eta D}{m} \right) \dot{x} - \left(
	\frac{1}{l^2} \right) (\dot{x}^2 + \dot{y}^2) x + \left( \frac{g}{l^2}
	\right) xy = 0
	\end{equation}

	dan $y$

	\begin{equation}
	\label{eqn:nlode-y}
	\ddot{y} + \left( \frac{3 \pi \eta D}{m} \right) \dot{y} + \left(
	\frac{1}{l^2} \right) (\dot{x}^2 + \dot{y}^2) y - \left( \frac{g}{l^2}
	\right) y^2 = -g.
	\end{equation}

	b. Jelaskan makna dari masing-masing suku yang dimaksud.
	<br /><br />

	c. Tuliskan kembali Persamaan \eqref{eqn:nlode-x} dan \eqref{eqn:nlode-y}
	untuk benda jatuh bebas tanpa gesekan udara. Jelaskan dalam parameter $\eta$
	dan $l$.
	<br /><br />

	d. Untuk bandul dengan simpangan kecil dan tanpa gaya gesek udara,
	bagaimanakah bentuk Persamaan \eqref{eqn:nlode-x} dan \eqref{eqn:nlode-y}?
	Jelaskan maksud suku-sukunya.

## Soal 2
Gunakan [editor](https://rawcdn.githack.com/dudung/jsxphys/4220729be109df8b94729ca4605562caa6d7596b/0.0.2/editor.html) untuk melihat tampilan soal sebenarnya bila diperlukan.

	Dengan menggunakan sistem bandul dalam soal sebelumnya dapat pula dipilih
	sistem koordinat polar $r$ dan $\theta$ yang dalam hal ini akan terpenuhi
	$\dot{r} = 0$ karena tali tidak mulur atau $r = l$.
	<br /><br />
	
	a. Perolehlah persamaan diferensial pada arah $\theta$
	\begin{equation}
	\label{eqn:nlode-theta}
	\ddot{\theta} + \left( \frac{g}{l} \right) \sin \theta = 0
	\end{equation}
	
	dan $r$
	
	\begin{equation}
	\label{eqn:nlode-r}
	\dot{\theta}^2 + \left( \frac{g}{l} \right) \cos \theta = \left( \frac{T}{lm}
	\right).
	\end{equation}
	
	b. Carilah solusi analitik $\theta$ dan $T$ untuk nilai $\theta$ kecil.
	<br /><br />
	
	c. Carilah solusi numerik dengan algoritma Euler untuk sembarang nilai
	$\theta$.
	<br /><br />
	
	d. Buatlah program sederhana di http://cpp.sh/ untuk menghasilkan angka-angka
	dari keduanya untuk sudut kecil dan sudut besar. Program harus siap untuk
	dijalankan.

## Soal 3
Gunakan [editor](https://rawcdn.githack.com/dudung/jsxphys/4220729be109df8b94729ca4605562caa6d7596b/0.0.2/editor.html) untuk melihat tampilan soal sebenarnya bila diperlukan.

	Gunakan aplikasi pada https://playground.tensorflow.org/ untuk membahas
	data-data yang diberikan dalam tabel-tabel berikut ini. Arsitektur jaringan
	saraf tiruan (JST) dinyatakan dengan notasi $N_1$-$N_2$-$N_3$, di mana $N_1$
	adalah jumlah neuron lapisan masukan, $N_2$ adalah jumlah neuron dalam
	lapisan tersembunyi (hidden layer), dan $N_3$ adalah jumlah neuron pada
	lapisan keluaran. Bila digunakan lebih dari satu lapisan tersembunyi,
	nyatakan dalam notasi berpola $N_1$-$N_2$- .. - $N_{n+2}$ dengan $n$ adalah
	jumlah layer tersembunyi.
	<br /><br />
	
	a. Tentukan notasi arsitektur JST agar dapat dalam Tabel REF tab:data-1 dapat
	terklasifikasikan dengan baik dalam dua kelas. Jelaskan langkah-langkah yang
	Anda lakukan. Gunakan arsitektur JST yang paling sederhana.
	
	TAB tab:data-1 Data 1
	x | y | kelas
	0.020 | 0.176 | 0
	0.274 | 0.498 | 0
	0.341 | 0.591 | 0
	0.273 | 0.612 | 0
	0.482 | 0.490 | 0
	0.047 | 0.329 | 0
	0.499 | 0.796 | 0
	0.201 | 0.794 | 0
	0.237 | 0.161 | 0
	0.481 | 0.314 | 0
	0.739 | 0.654 | 1
	0.942 | 0.663 | 1
	0.785 | 0.358 | 1
	0.584 | 0.787 | 1
	0.838 | 0.412 | 1
	0.818 | 0.252 | 1
	0.556 | 0.339 | 1
	0.854 | 0.425 | 1
	0.937 | 0.659 | 1
	0.544 | 0.684 | 1
	TAB
	
	b. Tentukan notasi arsitektur JST agar dapat dalam Tabel REF tab:data-2 dapat
	terklasifikasikan dengan baik dalam dua kelas. Jelaskan langkah-langkah yang
	Anda lakukan. Gunakan arsitektur JST yang paling sederhana.
	
	TAB tab:data-2 Data 2
	x | y | kelas
	0.903 | 0.408 | 0
	0.492 | 0.714 | 1
	0.556 | 0.019 | 0
	0.779 | 0.202 | 0
	0.691 | 0.081 | 0
	0.497 | 0.272 | 0
	0.131 | 0.728 | 1
	0.271 | 0.821 | 1
	0.586 | 0.540 | 0
	0.264 | 0.297 | 1
	0.520 | 0.400 | 0
	0.155 | 0.020 | 0
	0.538 | 0.729 | 1
	0.663 | 0.598 | 0
	0.016 | 0.149 | 1
	0.247 | 0.270 | 1
	0.560 | 0.618 | 1
	0.235 | 0.036 | 0
	0.179 | 0.203 | 1
	0.062 | 0.641 | 1
	TAB

	c. Tentukan notasi arsitektur JST agar dapat dalam Tabel REF tab:data-3 dapat
	terklasifikasikan dengan baik dalam dua kelas. Jelaskan langkah-langkah yang
	Anda lakukan. Gunakan arsitektur JST yang paling sederhana.
	
	TAB tab:data-3 Data 3
	x | y | kelas
	0.624 | 0.355 | 0
	0.159 | 0.958 | 1
	0.774 | 0.905 | 1
	0.620 | 0.434 | 0
	0.875 | 0.590 | 1
	0.479 | 0.107 | 1
	0.024 | 0.927 | 1
	0.661 | 0.246 | 1
	0.600 | 0.320 | 0
	0.490 | 0.417 | 0
	0.481 | 0.582 | 0
	0.684 | 0.514 | 0
	0.291 | 0.606 | 0
	0.222 | 0.659 | 1
	0.624 | 0.309 | 0
	0.596 | 0.246 | 1
	0.201 | 0.795 | 1
	0.327 | 0.082 | 1
	0.196 | 0.912 | 1
	0.619 | 0.563 | 0
	TAB

	d. Ungkapkan jawaban Anda mengenai kaitan antara arsitektur yang diperlukan
	untuk memisahkan dengan baik data-data dalam Tabel REF tab:data-1 -
	 REF tab:data-3 dengan bentuk sebaran datanya. Boleh juga dalam penjelasan
	secara visualnya. Mengapa perlu dibatasi arsitektur JST yang paling
	sederhana? Jelaskan dengan singkat.

## Soal 4
Gunakan [editor](https://rawcdn.githack.com/dudung/jsxphys/4220729be109df8b94729ca4605562caa6d7596b/0.0.2/editor.html) untuk melihat tampilan soal sebenarnya bila diperlukan.

	..

## Soal 5
Gunakan [editor](https://rawcdn.githack.com/dudung/jsxphys/4220729be109df8b94729ca4605562caa6d7596b/0.0.2/editor.html) untuk melihat tampilan soal sebenarnya bila diperlukan.

	..
