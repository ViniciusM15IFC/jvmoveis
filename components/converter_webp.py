from pathlib import Path
from PIL import Image

PASTA = Path("public/images")

extensoes = {".webp", ".jpeg", ".png"}

for arquivo in PASTA.rglob("*"):
    if arquivo.suffix.lower() not in extensoes:
        continue

    try:
        imagem = Image.open(arquivo)

        # Fotos ficam em RGB para o WebP
        if imagem.mode not in ("RGB", "RGBA"):
            imagem = imagem.convert("RGB")

        destino = arquivo.with_suffix(".webp")

        imagem.save(
            destino,
            "WEBP",
            quality=85,
            method=6
        )

        tamanho_original = arquivo.stat().st_size / 1024
        tamanho_novo = destino.stat().st_size / 1024

        print(
            f"{arquivo} → {destino} "
            f"({tamanho_original:.0f} KB → {tamanho_novo:.0f} KB)"
        )

    except Exception as e:
        print(f"ERRO em {arquivo}: {e}")