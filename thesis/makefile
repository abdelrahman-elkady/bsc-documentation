all: cleanbuild

cleanbuild:
	latexmk -pdf bachelor.tex && latexmk -c

pdf:
	latexmk -pdf bachelor.tex

clean:
	latexmk -c
	rm -f GUC-logo-ss-eps-converted-to.pdf
	rm -f bachelor.bbl
