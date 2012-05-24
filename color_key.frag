// Cyrille Henry 2007

#extension GL_ARB_texture_rectangle : enable
uniform sampler2DRect MyTex;
// uniform sampler2D MyTex;
uniform vec3 keyColor;
uniform float keyRange;


float computeAlpha(float color, float key)
{
  float res = abs(color-key);
  
  if (keyRange == 0.0)
  {
  	if (res > 0.0)
  	{
  		res = 1.0;
  	}
  }
  else
  {
  	res /= keyRange;
    if (res > 1.0)
    {
  	  res = 1.0;
    }
    res = 1.0 - res;
  }
  return res;
}


void main (void)
{
  vec4 color = texture2DRect(MyTex, gl_TexCoord[0].st);
//  vec4 color = texture2D(MyTex, gl_TexCoord[0].st);

  float alpha = computeAlpha(color.r, keyColor.r) * computeAlpha(color.g, keyColor.g) * computeAlpha(color.b, keyColor.b);
  

 color.a = alpha;

//color.g=0.0;
//color.b=0.0;

  gl_FragColor = color;
}
