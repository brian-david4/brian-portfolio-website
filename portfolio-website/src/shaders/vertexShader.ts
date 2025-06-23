export const vertex = `

uniform float uTime;

void main()
{
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    modelPosition.z+= sin(modelPosition.x * 0.5 + (uTime)) * 0.1;
    modelPosition.z+= sin(modelPosition.y * 0.05 + (uTime)) * 0.1;

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;
}
`;
