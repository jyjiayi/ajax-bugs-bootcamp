export default function initBugsController(db) {
  const addBugToDb = async (req, res) => {
    try {
      const bug = await db.Bug.create({
        problem: req.body.problem,
        errorText: req.body.errorText,
        commit: req.body.commit,
      });
      console.log('bug :>> ', bug);
      res.send({ bug });
    } catch (error) {
      console.log(error);
    }
  };
  return { addBugToDb };
}
