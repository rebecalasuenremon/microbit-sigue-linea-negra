basic.forever(function () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 20)
    } else {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    }
    if (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 20)
    } else {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    }
})
