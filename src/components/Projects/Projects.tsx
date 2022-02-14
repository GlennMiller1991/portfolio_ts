import React, {useMemo} from "react";
import commonStyles from '../../common/styles/CommonStyles.module.scss'
import styles from './Projects.module.scss'
import {Project} from "./Project/Project";
import portfolioPic from './../../../src/assets/pic/portfolio.png'
import bookPic from './../../../src/assets/pic/book.png'
import socnet from './../../../src/assets/pic/socnet.png'
import testJob from './../../../src/assets/pic/testJob.png'
import pythonPortfolio from './../../../src/assets/pic/pythonPortfolio.png'

export const Projects = React.memo(() => {
    const projectEntities = useMemo(() => {
        return [
            {
                title: 'TypeScript Portfolio',
                style: {backgroundImage: `url(${portfolioPic})`},
                link: 'https://glennmiller1991.github.io/portfolio_ts/',
                tags: [
                    'TypeScript', 'Redux', 'SCSS', 'HTML', 'CSS3', 'Hooks'
                ],
            },
            {
                title: 'Looking for Book',
                style: {backgroundImage: `url(${bookPic})`},
                link: 'https://glennmiller1991.github.io/looking_for_book/#/',
                tags: [
                    'TypeScript', 'HTML', 'Redux', 'CSS3', 'Google Books API', 'Thunk', 'Hooks'
                ]
            },
            {
                title: 'Python Blog',
                style: {backgroundImage: `url(${pythonPortfolio})`},
                link: 'https://github.com/GlennMiller1991/PythonPortfolio',
                tags: [
                    'Python', 'JavaScript', 'Flask', 'HTML', 'CSS3', 'SQLAlchemy', 'MySQL',
                ]
            },
            {
                title: 'Social Network',
                style: {backgroundImage: `url(${socnet})`},
                link: 'https://glennmiller1991.github.io/social_network/#/',
                tags: [
                    'TypeScript', 'Redux', 'HTML', 'CSS3', 'Hooks', 'Thunk', 'StoryBook', 'VK Open API', 'REST API',
                ]
            },
            {
                title: 'Test Job',
                style: {backgroundImage: `url(${testJob})`},
                link: 'https://glennmiller1991.github.io/test_job/#/',
                tags: [
                    'TypeScript', 'Redux', 'HTML', 'CSS3', 'Hooks'
                ]
            },
        ]
    }, [])
    return (
        <div id={'projects'} className={styles.projects}>
            <div className={`${commonStyles.container} ${styles.container}`}>
                <h2 className={commonStyles.title}>
                    <span className={commonStyles.upperThenHeader}>PROJECTS</span>
                    PROJECTS</h2>
                <div className={styles.projectsContainer}>
                    {
                        projectEntities.map((project, id) => {
                            return <Project key={id} {...project}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
})