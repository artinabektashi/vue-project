import admin from "../services/firebase";
import registerUserSchema from "../validator/userValidation/registerUserSchema";




const userController = {
  register: async (req, res) => {
    const validationResult = registerUserSchema.validate(req.body);

    if (validationResult.error) {
      return res.status(400).json({ error: validationResult.error });
    }

    const { email, password } = req.body;
    try {
      const user = await admin.auth().createUser({
        email,
        password,
      });

      return res.json({ user });
    } catch (error) {
      return res.status(403).json({ error: error.message });
    }
  },
};
export default userController;
