export const fragment = `
uniform vec3 uColour;

void main()
{

    gl_FragColor = vec4(uColour, 1.0);
}
`;
