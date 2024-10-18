import express from 'express';
import { getRepository } from "typeorm";
import { User } from "./user.entity";
import bcrypt from 'bcrypt';

const router = express.Router();
const saltRounds = 10;

router.post('/register', async (req, res) => {
    const userRepository = getRepository(User);
    const { email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const newUser = new User();
        newUser.email = email;
        newUser.password = hashedPassword;
        await userRepository.save(newUser);
        return res.json({ message: 'Usuário registrado com sucesso' });
    } catch (error) {
        console.error("Erro ao registrar usuário:", error);
        return res.status(500).json({ message: 'Erro ao registrar usuário' });
    }
});


router.post('/login', async (req, res) => {
    const userRepository = getRepository(User);
    const { email, password } = req.body;

    try {
        const user = await userRepository.findOne({ where: { email } });
        if (!user) {
            return res.status(401).json({ message: 'Usuário não encontrado' });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Senha incorreta' });
        }
        return res.json({ message: 'Login efetuado com sucesso' });
    } catch (error) {
        console.error("Erro ao realizar login:", error);
        return res.status(500).json({ message: 'Erro ao realizar login' });
    }
});

export default router;
