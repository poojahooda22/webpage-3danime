'use client'

import { useEffect } from 'react'
import styles from './style.module.css'


function Cursor() {
    

    useEffect(() => {
        const coords = {x: 0, y:0}
        const circles = document.querySelectorAll('.circle');
        // const colors = [
        //     '#d78346', '#dc804b', '#e57a58', '#e17d51', '#af295e', '#e8775f', '#da5f5c', '#ea7b5d', '#f69862', '#ffb56b'
        // ]

        circles.forEach(function(circle) {
            circle.x = 0;
            circle.y = 0;
            // circle.style.backgroundColor = colors[index % colors.length]
        });

        window.addEventListener("mousemove", function(e) {
            coords.x = e.clientX;
            coords.y = e.clientY;         
        });

        function animateCircles() {
            let x = coords.x;
            let y = coords.y;

            circles.forEach(function(circle, index) {
                circle.style.left = x - 4 + "px";
                circle.style.top = y - 4 + "px";
                circle.style.scale = (circles.length - index)/ circles.length;
                circle.x = x;
                circle.y = y;

                const nextCircle = circles[index + 1] || circles[0];
                x += (nextCircle.x - x) * .3;
                y += (nextCircle.y - y) * .3;
            })
            requestAnimationFrame(animateCircles);
        }
        animateCircles();
    })
  return (
    <div className={``}>
        <div className={`circle ${styles.circle}`}></div>
        <div className={`circle ${styles.circle}`}></div>
        <div className={`circle ${styles.circle}`}></div>
        <div className={`circle ${styles.circle}`}></div>
        <div className={`circle ${styles.circle}`}></div>
        <div className={`circle ${styles.circle}`}></div>
        <div className={`circle ${styles.circle}`}></div>
        <div className={`circle ${styles.circle}`}></div>
        <div className={`circle ${styles.circle}`}></div>
        <div className={`circle ${styles.circle}`}></div>
    </div>
  )
}

export default Cursor
