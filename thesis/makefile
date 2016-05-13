all: cleanbuild

cleanbuild:
	latexmk -r latexmake.rc -pdf bachelor.tex && latexmk -c

pdf:
	latexmk -r latexmake.rc -pdf bachelor.tex

clean:
	latexmk -c
	rm -f GUC-logo-ss-eps-converted-to.pdf
	rm -f bachelor.bbl
