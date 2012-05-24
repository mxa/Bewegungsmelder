// based on the glsl examples Cyrille Henry 2007
// and http://www.opengl.org/sdk/docs/tutorials/ClockworkCoders/discard.php
// Max Neupert 2009

void main()
{
    gl_TexCoord[0] = gl_MultiTexCoord0;
       gl_Position = gl_ModelViewProjectionMatrix * gl_Vertex;

}
 