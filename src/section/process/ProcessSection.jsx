function ProcessSection() {
  return (
    <div className="process rounded-3xl mt-10 p-5">
      <div className="grid grid-cols-1 lg:grid-cols-25 grid-rows-2 gap-10 my-10 md:my-20">
        <div className="lg:col-start-4 lg:col-end-13 span-1">
          <h1 className="id text-3xl opa1city-50">
            <span>01</span>
          </h1>
          <h3 className="subtitle-secondary my-4">
            <span>Make it</span>
          </h3>
          <p className="bodyText my-5">
            <span>
              I sketch wire-frames and make prototypes. Talking through tactile
              designs existing in the browser is worth its weight. Design tools
              only carry you so far; the rest should be realized with a link my
              team can rally around.
            </span>
          </p>
        </div>

        <div className="span-1 lg:col-start-14 lg:col-end-23">
          <h1 className="id text-3xl opa1city-50">
            <span>02</span>
          </h1>
          <h3 className="subtitle-secondary my-4">
            <span>Collaborate</span>
          </h3>
          <p className="bodyText my-5">
            <span>
              Good design is not created in a vacuum but rather in a shared
              space. It must be facilitated and iterated upon as a team. I aim
              to include stakeholders in my design process and create a
              collaborative environment that welcomes and encourages feedback.
            </span>
          </p>
        </div>

        <div className="lg:col-start-4 lg:col-end-13 span-1 ">
          <h1 className="id text-3xl opa1city-50">
            <span>03</span>
          </h1>
          <h3 className="subtitle-secondary my-4">
            <span>Accessible FTW</span>
          </h3>
          <p className="bodyText my-5">
            <span>
              I aim to make everything I design accessible to all for one main
              reason - it&apos;s the right thing to do. Accessible products
              benefit the many, not the few.
            </span>
          </p>
        </div>
        <div className="span-1 lg:col-start-14 lg:col-end-23">
          <h1 className="id text-3xl opa1city-50">
            <span>04</span>
          </h1>
          <h3 className="subtitle-secondary my-4">
            <span>Keep Experimenting</span>
          </h3>
          <p className="bodyText my-5">
            <span>
              Everything I create is subject to change and experimentation. Not
              everything will work, but it&apos;s worth trying - and learning
              from what doesn&apos;t.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProcessSection;
