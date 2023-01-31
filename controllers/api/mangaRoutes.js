const router = require("express").Router();
const { mangas } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", async (req, res) => {
  try {
    const MangaData = await Manga.findAll({
      include: [
        {
          model: 'Manga',
          attributes: ["title", "artist", "description"],
        },
      ],
    });

    const Manga = MangaData.map((Manga) => Manga.get({ plain: true }));
    res.render("manga", {});
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/manga/title', async (req, res) => {

    try {
        const MangaData = await Manga.findByPk(req.params.title, {
          include: [
            {
                model: Manga,
                attributes: ["title"],
            },
          ],

        });

    const mangas = MangaData.get({plain: true });

    res.render('mangas', {
        ...mangas,
        logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/mangas', withAuth, async (req, res) => {
    try {
        const MangaData = await Manga.findAll(req.params.Manga, {
            include: [
                {
                    model: User,
                    attributes: ['name']
                },
            ],

});

const project = MangaData.get({ plain: true });

res.render('mangas', {
    ...mangas,
    logged_in: req.session.logged_in
  });
} catch (err) {
  res.status(500).json(err);
}
});

router.get('/mangas', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
          attributes: { exclude: ['password'] },
          include: [{ model: Project }],
        });
    
        const user = userData.get({ plain: true });
    
        res.render('profile', {
          ...user,
          logged_in: true
        });
      } catch (err) {
        res.status(500).json(err);
      }
    });