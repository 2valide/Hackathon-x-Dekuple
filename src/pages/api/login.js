import cookie from 'cookie';

const users = [
    { email: 'admin@test.fr', password: '1234' },
    { email: 'maoni@gmail.com', password: '1234' }
];

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { email, password } = req.body;

        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            res.setHeader('Set-Cookie', cookie.serialize('connected', 'true', {
                httpOnly: true,
                secure: process.env.NODE_ENV !== 'development',
                maxAge: 60 * 60 * 24, // 1 jours
                path: '/'
            }));

            // Répondre succès
            res.status(200).json({ message: 'Connecté avec succès' });
        } else {
            // Si les identifiants sont incorrects, renvoyer une erreur
            res.status(401).json({ message: 'Mot de passe ou identifiant incorrect' });
        }
    } else {
        // Gérer toute méthode HTTP autre que POST
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Méthode ${req.method} non autorisée`);
    }
}
