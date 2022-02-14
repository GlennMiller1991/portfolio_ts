import React, {useMemo} from "react";
import styles from './Skills.module.scss'
import commonStyles from '../../common/styles/CommonStyles.module.scss'
import {Skill} from "./Skill/Skill";
import {faJs} from "@fortawesome/free-brands-svg-icons/faJs";
import {faFileCode, faProjectDiagram} from "@fortawesome/free-solid-svg-icons";
import {faCss3Alt} from "@fortawesome/free-brands-svg-icons/faCss3Alt";
import {faHtml5, faSass} from "@fortawesome/free-brands-svg-icons";
import {faNetworkWired} from "@fortawesome/free-solid-svg-icons/faNetworkWired";
import {faVials} from "@fortawesome/free-solid-svg-icons/faVials";
import {faBook} from "@fortawesome/free-solid-svg-icons/faBook";
import {faGithubSquare} from "@fortawesome/free-brands-svg-icons/faGithubSquare";
import {faHighlighter} from "@fortawesome/free-solid-svg-icons/faHighlighter";
import {faEdit} from "@fortawesome/free-solid-svg-icons/faEdit";
import {faTextHeight} from "@fortawesome/free-solid-svg-icons/faTextHeight";
import {faPython} from "@fortawesome/free-brands-svg-icons/faPython";
import {faFlask} from "@fortawesome/free-solid-svg-icons/faFlask";



export const Skills = React.memo(() => {
    const skillsEntities = useMemo(() => {
        return [
            {name:'JavaScript',icon:faJs,description:''},
            {name:'TypeScript',icon:faTextHeight,description:''},
            {name:'Thunk',icon:faFileCode,description:''},
            {name:'CSS3',icon:faCss3Alt,description:''},
            {name:'SASS',icon:faSass,description:''},
            {name:'HTML',icon:faHtml5,description:''},
            {name:'Axios',icon:faNetworkWired,description:''},
            {name:'Story Book',icon:faBook,description:''},
            {name:'Rest API',icon:faProjectDiagram,description:''},
            {name:'Unit test',icon:faVials,description:''},
            {name:'Git',icon:faGithubSquare,description:''},
            {name:'Material UI',icon:faHighlighter,description:''},
            {name:'Ant Design',icon:faEdit,description:''},
            {name:'Python v3.6.x',icon:faPython,description:''},
            {name:'Flask',icon:faFlask,description:''},
        ]
    }, [])
    const fakeDescription = 'Dolores sit ipsum velit purus aliquet, massa fringilla leo the drana.'
    return (
        <div id={'skills'} className={styles.skills}>
            <div className={`${commonStyles.container} ${styles.container}`}>
                <h2 className={commonStyles.title}>
                    <span className={commonStyles.upperThenHeader}>EXPERIENCE</span>
                    EXPERIENCE
                </h2>
                <div className={styles.skillsContainer}>
                    {
                        skillsEntities.map((skill, id) => {
                            return <Skill key={id} {...skill} description={fakeDescription}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
})