import { useParams } from 'react-router-dom';

export default function BlogDetail() {
    const urlParams = useParams();
    // console.log(urlParams);
    return (
        <>
            <h1>Ini adalah {urlParams.slug}</h1>
            <p>Halo disini saya ingin mengatakan bahwa {urlParams.slug} berbau porn</p>
        </>
    );
}