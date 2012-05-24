//Jack/RYBN 2009 modified by Max Neupert
#extension GL_ARB_texture_rectangle : enable
uniform sampler2DRect MyTex;
uniform vec3 keyColor;
uniform float keyRange;
float red, green, blue;

void main (void)
{
	vec4 color = texture2DRect(MyTex, gl_TexCoord[0].st);

	if (abs(color.r - keyColor.r) >= keyRange) {
		red = 1.0;
	} else {
		if ((color.r - keyColor.r) <= 0.0) {
			red = (color.r - keyColor.r)/keyRange;
		} else {
			red = (keyColor.r - color.r)/keyRange;
		}
	}

	if (abs(color.g - keyColor.g) >= keyRange) {
		green = 1.0;
	} else {
		if ((color.g - keyColor.g) <= 0.0) {
			green = (color.g - keyColor.g)/keyRange;
		} else {
			green = (keyColor.g - color.g)/keyRange;
		}
	}

	if (abs(color.b - keyColor.b) >= keyRange) {
		blue = 1.0;
	} else {
		if ((color.b - keyColor.b) <= 0.0) {
			blue = (color.b - keyColor.b)/keyRange;
		} else {
			blue = (keyColor.b - color.b)/keyRange;
		}
	}

	color.a = (red+green+blue) / 3.0;
	gl_FragColor = color;
}
