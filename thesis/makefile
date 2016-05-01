all: cleanbuild

cleanbuild:
	latexmk -pdf bachelor.tex && latexmk -c

pdf:
	latexmk -pdf bachelor.tex

clean:
	latexmk -c
	rm GUC-logo-ss-eps-converted-to.pdf
	rm bachelor.bbl
