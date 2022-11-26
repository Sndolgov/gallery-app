import styles from './Gallery.module.css'
import img1 from '../../asserts/pictures/1.jpg'
import img2 from '../../asserts/pictures/2.jpg'
import img3 from '../../asserts/pictures/3.jpg'
import img4 from '../../asserts/pictures/4.jpg'
import img5 from '../../asserts/pictures/5.jpg'
import img6 from '../../asserts/pictures/6.jpg'
import img7 from '../../asserts/pictures/7.jpg'
import img8 from '../../asserts/pictures/8.jpg'
import img9 from '../../asserts/pictures/9.jpg'
import img10 from '../../asserts/pictures/10.jpg'
import img11 from '../../asserts/pictures/11.jpg'
import img12 from '../../asserts/pictures/12.jpg'
import img13 from '../../asserts/pictures/13.jpg'
import img14 from '../../asserts/pictures/14.jpg'
import img15 from '../../asserts/pictures/15.jpg'
import {useEffect, useState} from "react";

const images = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15
]

const Gallery = () => {

    const [windowWidth, setWindowWidth] = useState(getWindowWidth());
    const [imgColumns, setImgColumns] = useState([])


    function getWindowWidth() {
        return window.innerWidth;
    }

    useEffect(() => {
        function handleWindowResize() {
            setWindowWidth(getWindowWidth());
        }
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    useEffect(() => {
        const numColumns = Math.floor(windowWidth / 350);
        fillImgColumns(numColumns > 0 ? numColumns : 1)
        // const timer = setTimeout(() => fillImgColumns(Math.floor(windowWidth / 350)), 0)
        // return () => {
        //     clearTimeout(timer)
        // }
    }, [windowWidth]);



    const fillImgColumns = (numColumns) => {
        const updatedImgColumns = []
        images.forEach((img, index) => {
                const indexArr = index % numColumns;
                if (updatedImgColumns[indexArr]) {
                    updatedImgColumns[indexArr].push(img)
                } else {
                    updatedImgColumns[indexArr] = [img]
                }
            }
        )
        setImgColumns(updatedImgColumns)
    }

    const imagesHandler = () => {

        const imgWidth = imgColumns.length < 2 ? windowWidth : windowWidth/imgColumns.length
        console.log('imgWidth: ' + imgWidth)
        console.log('windowWidth: ' + windowWidth)
        return (
            imgColumns.map((column, index) => (
                <div key={index} className={styles.column}>{
                    column.map((img, index) => (
                            <img key={index} src={img} style={{width: imgWidth}} alt='Main'/>
                        )
                    )
                }
                </div>
            ))
        )
    }

    return (
        <div className={styles.gallery}>
            {imagesHandler()}
        </div>
    )
}

export default Gallery