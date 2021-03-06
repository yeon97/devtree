package com.rootnode.devtree.db.entity;

import com.rootnode.devtree.db.entity.compositeKey.ProjectPositionReservationId;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Table(name = "tb_project_position_reservation")
@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
public class ProjectPositionReservation {
    @EmbeddedId
    private ProjectPositionReservationId projectPositionReservationID;

    @ManyToOne(fetch = FetchType.LAZY)
    @MapsId("projectPositionID")
    @JoinColumns({
            @JoinColumn(name = "team_seq", referencedColumnName = "team_seq"),
            @JoinColumn(name = "detail_position_name", referencedColumnName = "detail_position_name")
    })
    private ProjectPosition projectPosition;

    @ManyToOne(fetch = FetchType.LAZY)
    @MapsId("userSeq")
    @JoinColumn(name = "user_seq")
    private User user;

    @Column(name = "project_reservation_create_time")
    private LocalDateTime projectReservationCreateTime;
}
