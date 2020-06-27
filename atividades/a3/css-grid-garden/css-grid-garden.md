# CSS Grid Garden

https://cssgridgarden.com/

## Level 1

```css
#water {
  grid-column-start: 3;
}
```

![Level 1](assets/level-1.png)

## Level 2

```css
#poison {
  grid-column-start: 5;
}
```

![Level 2](assets/level-2.png)

## Level 3

```css
#water {
  grid-column-start: 1;
  grid-column-end: 4;
}
```

![Level 3](assets/level-3.png)

## Level 4

```css
#water {
  grid-column-start: 5;
  grid-column-end: 2;
}
```

![Level 4](assets/level-4.png)

## Level 5

```css
#water {
  grid-column-start: 1;
  grid-column-end: -2;
}
```

![Level 5](assets/level-5.png)

## Level 6

```css
#poison {
  grid-column-start: -3;
}
```

![Level 6](assets/level-6.png)

## Level 7

```css
#water {
  grid-column-start: 2;
  grid-column-end: span 2;
}
```

![Level 7](assets/level-7.png)

## Level 8

```css
#water {
  grid-column-start: 1;
  grid-column-end: span 5;
}
```

![Level 8](assets/level-8.png)

## Level 9

```css
#water {
  grid-column-start: -4;
  grid-column-end: 6;
}
```

![Level 9](assets/level-9.png)

## Level 10

```css
#water {
  grid-column: 4/6;
}
```

![Level 10](assets/level-10.png)

## Level 11

```css
#water {
  grid-column: 2 / span 3;
}
```

![Level 11](assets/level-11.png)

## Level 12

```css
#water {
  grid-row-start: 3;
}
```

![Level 12](assets/level-12.png)

## Level 13

```css
#water {
  grid-row: 3 / span 3;
}
```

![Level 13](assets/level-13.png)

## Level 14

```css
#poison {
  grid-row: 5;
  grid-column: 2;
}
```

![Level 14](assets/level-14.png)

## Level 15

```css
#water {
  grid-row: span 5;
  grid-column: 2 / span 4;
}
```

![Level 15](assets/level-15.png)

## Level 16

```css
#water {
  grid-area: 1 / 2 / span 3 / span 4;
}
```

![Level 16](assets/level-16.png)

## Level 17

```css
#water-2 {
  grid-area: 2 / 3 / span 3 / span 3;
}
```

![Level 17](assets/level-17.png)

## Level 18

```css
#poison {
  order: 5;
}
```

![Level 18](assets/level-18.png)

## Level 19

```css
.poison {
  order: -1;
}
```

![Level 19](assets/level-19.png)

## Level 20

```css
#garden {
  display: grid;
  grid-template-columns: 50%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}
```

![Level 20](assets/level-20.png)

## Level 21

```css
#garden {
  display: grid;
  grid-template-columns: repeat(5, 12.5%);
  grid-template-rows: 20% 20% 20% 20% 20%;
}
```

![Level 21](assets/level-21.png)

## Level 22

```css
#garden {
  display: grid;
  grid-template-columns: 100px 3rem 40%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}
```

![Level 22](assets/level-22.png)

## Level 23

```css
#garden {
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-rows: 20% 20% 20% 20% 20%;
}
```

![Level 23](assets/level-23.png)

## Level 24

```css
#garden {
  display: grid;
  grid-template-columns: 50px repeat(3, 1fr) 50px;
  grid-template-rows: 20% 20% 20% 20% 20%;
}
```

![Level 24](assets/level-24.png)

## Level 25

```css
#garden {
  display: grid;
  grid-template-columns: 75px 3fr 2fr;
  grid-template-rows: 100%;
}
```

![Level 25](assets/level-25.png)

## Level 26

```css
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 50px repeat(3, 0fr) 1fr;
}
```

![Level 26](assets/level-26.png)

## Level 27

```css
#garden {
  display: grid;
  grid-template: 60% 40% / 200px;
}
```

![Level 27](assets/level-27.png)

## Level 28

```css
#garden {
  display: grid;
  grid-template: 1fr 50px / 20% 80%;
}
```

![Level 28](assets/level-28.png)
